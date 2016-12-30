(function(){
    angular
        .module("jagameCP")
        .controller("paymentCtrl",paymentCtrl);

    // paymentCtrl.$inject = [];

    function paymentCtrl(){
        var vm = this;
        vm.payments = [];




        function paymentInit(){
            var res = [{
                title:"Escort Service",
                date:"010117",
                mode:"VISA",
                transactionID:"141adion234"



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

        }




})();