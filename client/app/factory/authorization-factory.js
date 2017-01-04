(function(){
    angular
        .module("jagameCP")
        .factory('authorization', ['$rootScope', '$state', 'principal',
    function($rootScope, $state, principal) {
        return {
            authorize: function() {
                return principal.identity()
                    .then(function() {
                        var isAuthenticated = principal.isAuthenticated();

                        // if (isAuthenticated == false){
                        //     $rootScope.returnToState
                        //         = $rootScope.toState;
                        //     $rootScope.returnToStateParams
                        //         = $rootScope.toStateParams;
                        //     $state.go('login');
                        // }

                         if ($rootScope.toState.data.roles
                            && $rootScope.toState
                                .data.roles.length > 0
                            && !principal.isInAnyRole(
                                $rootScope.toState.data.roles))
                        {
                            if (isAuthenticated) {
                                // user is signed in but not
                                // authorized for desired state
                                $state.go('accessdenied');
                            } else {
                                // user is not authenticated. Stow
                                // the state they wanted before you
                                // send them to the sign-in state, so
                                // you can return them when you're done
                                $rootScope.returnToState
                                    = $rootScope.toState;
                                $rootScope.returnToStateParams
                                    = $rootScope.toStateParams;

                                // now, send them to the signin state
                                // so they can log in
                                $state.go('login');
                            }
                        }
                    });
            }
        };
    }
])
})();