(function () {
    angular
        .module("jagameCP")
        .controller("apptCtrl",apptCtrl);

    apptCtrl.$inject = ["$uibModal", "$log", "$document", "apptService"];

    function apptCtrl($uibModal, $log, $document, apptService) {
        var vm = this;
        vm.appts = [];

        apptInit();

        function apptInit(){

            apptService.apptSearch()
            .then(function(res){
                console.log("at apptCtrl" + res);

            })
            .catch(function(err){

            });

            var seed = [{
                id:'8529234',
              date:'010417',
                title:'Scheduled Tube Discharge',
                report:'Need extra care with the new fitting'
            },{
                id:'8529344',
                date:'010418',
                title:'Scheduled Tube Refitting',
                report:'Need extra care with the old fitting'
            }];

            vm.appts = seed;
        }

        //modalfunction

        vm.open = function (res) {



            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'apptModalContent.html',
                controller: 'apptModalInstanceCtrl',
                controllerAs: 'ctrl'
            });

            modalInstance.title = res.title;
            modalInstance.report = res.report;
            modalInstance.date = res.date;

            // modalInstance.result.then(function (selectedItem) {
            //     vm.selected = selectedItem;
            // }, function () {
            //     $log.info('Modal dismissed at: ' + new Date());
            // });
        };

        //modalfunction

        //todo





    }

})();

(function(){
    angular
        .module('jagameCP')
        .controller('apptModalInstanceCtrl', function ($uibModalInstance, $scope) {
            var vm = this;

            $scope.title = $uibModalInstance.title;
            $scope.report = $uibModalInstance.report;
            $scope.date = $uibModalInstance.date;



            vm.ok = function () {
        $uibModalInstance.close('');
            };

});

})();