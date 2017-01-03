(function(){
    angular
        .module("jagameCP")
        .controller("homeCtrl",homeCtrl);

    homeCtrl.$inject = ["$q", "AuthFactory"];

    function homeCtrl($q, AuthFactory){
        var vm =this;
        vm.isUserLogon = false;

        AuthFactory
            .getUserStatus(function(result){
            console.log("at homeCtrl" + JSON.stringify(result));
            vm.isUserLogon = result;
        });



    }

})();