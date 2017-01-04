(function(){
    angular
        .module("jagameCP")
        .controller("loginCtrl",loginCtrl);

    loginCtrl.$inject = ["$state", "AuthFactory", "Flash", "$stateParams"];

    function loginCtrl($state, AuthFactory, Flash, $stateParams){
        var vm = this;

        vm.registerButton = registerButton;

        // $scope.signin = function() {
        //
        //     // here, we fake authenticating and give a fake user
        //     principal.authenticate({
        //         name: 'Test User',
        //         roles: ['User']
        //     });
        //
        //     if ($scope.returnToState) $state.go($scope.returnToState.name, $scope.returnToStateParams);
        //     else $state.go('home');
        // };



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
                        $state.go("login");
                    }
                }).catch(function (err) {
                console.log("error " + JSON.stringify(err));
            });

        };
        function registerButton(){
            console.log("register state");
        }

        console.log("stateParams @ login:" + $stateParams);

    }

})();