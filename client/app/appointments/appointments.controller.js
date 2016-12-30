(function () {
    angular
        .module("jagameCP")
        .controller("apptCtrl",apptCtrl);

    apptCtrl.$inject = [];

    function apptCtrl() {
        var vm = this;
        vm.appts = [];

        apptInit();

        function apptInit(){
            // apptService.list()
            // .then(function(res){
            //     vm.appt = res;
            //
            // })
            // .catch(function(err){
            //
            // })

            var res = [{
              date:'010417',
                title:'Scheduled Tube Discharge',
                report:'Need extra care with the new fitting'
            }];

            vm.appts = res;
        }



    }

})();