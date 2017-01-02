(function () {
    angular
        .module("jagameCP")
        .controller("paymentCtrl", paymentCtrl);

    paymentCtrl.$inject = ["$uibModal", "$log", "$document"];

    function paymentCtrl($uibModal, $log, $document) {
        var vm = this;
        vm.payments = [];


        function paymentInit() {
            var res = [{
                title: "Escort Service",
                date: "010117",
                mode: "VISA",
                transactionID: "141adion234",
                appointmentID: "3445661"


            }];

            vm.payments = res;


            // paymentService.list()
            //     .then(function(res){
            //             vm.payment = res;
            //
            //     })
            //     .catch(function(err){
            //
            //     })
        }

        paymentInit();


        vm.open = function (res) {


            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'paymentModalContent.html',
                controller: 'paymentModalInstanceCtrl',
                controllerAs: 'ctrl'
            });

            modalInstance.title = res.title;
            modalInstance.date = res.date;
            modalInstance.mode = res.mode;

            // modalInstance.result.then(function (selectedItem) {
            //     vm.selected = selectedItem;
            // }, function () {
            //     $log.info('Modal dismissed at: ' + new Date());
            // });
        };


    }

})();

(function(){
    angular
        .module('jagameCP')
        .controller('paymentModalInstanceCtrl', function ($uibModalInstance, $scope) {
            var vm = this;

            $scope.title = $uibModalInstance.title;
            $scope.mode = $uibModalInstance.mode;
            $scope.date = $uibModalInstance.date;



            vm.ok = function () {
                $uibModalInstance.close('');
            };

        });

})();