(function(){
    angular
        .module("jagameCP")
        .controller("homeCtrl",homeCtrl);

    homeCtrl.$inject = ["$q"/*, "AuthFactory"*/];

    function homeCtrl($q/*, AuthFactory*/){
        var vm =this;

        // AuthFactory.getUserStatus(function(result){
        //     console.log(JSON.stringify(result));
        //     vm.isUserLogon = result;
        // });

        vm.isUserLogon = true;

    }

})();