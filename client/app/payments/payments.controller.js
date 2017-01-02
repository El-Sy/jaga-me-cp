(function () {
    angular
        .module("jagameCP")
        .controller("paymentCtrl", paymentCtrl);

    // paymentCtrl.$inject = [];

    function paymentCtrl() {
        var vm = this;
        vm.payments = [];


        function paymentInit() {
            var res = [{
                title: "Escort Service",
                date: "010117",
                mode: "VISA",
                transactionID: "141adion234"


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
            modalInstance.report = res.report;

            // modalInstance.result.then(function (selectedItem) {
            //     vm.selected = selectedItem;
            // }, function () {
            //     $log.info('Modal dismissed at: ' + new Date());
            // });
        };


    }

})();