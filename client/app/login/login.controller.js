(function(){
    angular
        .module("jagameCP")
        .controller("loginCtrl",loginCtrl);

    loginCtrl.$inject = ["$state", "AuthFactory", "Flash"];

    function loginCtrl($state, AuthFactory, Flash){
        var vm = this;

        vm.registerButton = registerButton;

        vm.login = function (){
            AuthFactory
                .login(vm.user)
                .then(function(){
                    if(AuthFactory.isLoggedIn()){
                        vm.username = "";
                        vm.password = "";
                        $state.go("home");
                    }else{
                        Flash.create('danger',
                            "User or Password is incorrect",0,
                            {
                            class: 'custom-class',
                            id: 'custom-id'
                        },
                            true);
                        $state.go("SignIn");
                    }
                }).catch(function (err) {
                console.log("error " + JSON.stringify(err));
            });

        };
        function registerButton(){
            console.log("register state");
        }

    }

})();