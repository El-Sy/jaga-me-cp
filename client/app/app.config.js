(function(){
    angular
        .module("jagameCP")
        .config(jagameCPConfig);

    jagameCPConfig.$inject = ["$stateProvider","$urlRouterProvider"];

    function jagameCPConfig($stateProvider,$urlRouterProvider){

        $stateProvider

            .state('login',{
                url:'/',


                views:{
                    "nav":{
                        templateUrl:"app/home/navigation.html"
                    },
                    "content":{
                        templateUrl:"app/login/login.html"
                    }

                },
                controller : 'loginCtrl',
                controllerAs : 'ctrl'

            })
            .state('home',{

                url:'/home',
                views:{
                    "nav":{
                        templateUrl:"app/home/navigation.html"

                    }

                    ,
                    "content":{
                        templateUrl:"app/home/welcome.html"
                    }

                },
                controller : 'homeCtrl',
                controllerAs : 'ctrl'


            })
            .state('appointments',{

                url:'/appointments',
                views:{
                    "nav":{
                        templateUrl:"app/home/navigation.html"
                    },
                    "content":{
                        templateUrl:"app/appointments/appointments.html"
                    }

                },
                controller : 'apptCtrl',
                controllerAs : 'ctrl'

            })
            .state('patient',{

                url:'/patient',

                views:{
                    "nav":{
                        templateUrl:"app/home/navigation.html"
                    },
                    "content":{
                        templateUrl:"app/patient/patient.html"
                    }

                },
                controller : 'patientCtrl',
                controllerAs : 'ctrl'

            })
            .state('payments',{

                url:'/payments',

                views:{
                    "nav":{
                        templateUrl:"app/home/navigation.html"
                    },
                    "content":{
                        templateUrl:"app/payments/payments.html"

                        }
                    },
                controller : 'paymentsCtrl',
                controllerAs : 'ctrl'

            })

            .state('user',{

                url:'/user',

                views:{
                    "nav":{
                        templateUrl:"app/home/navigation.html"
                    },
                    "content":{
                        templateUrl:"app/user/user.html"
                    }

                },
                controller : 'userCtrl',
                controllerAs : 'ctrl'

            })

            .state('signup',{

        url:'/register',

            views:{
                "nav":{
                    templateUrl:"app/home/navigation.html"
                },
                "content":{
                    templateUrl:"app/login/register.html"
                }

            },
            controller : 'registerCtrl',
            controllerAs : 'registerCtrl'

        });

        $urlRouterProvider.otherwise("/");
    }




})();

// (function(){
//     angular
//         .module("jagameCP")
//         .run(['$rootScope', '$state', '$stateParams', 'AuthFactory',
//             function($rootScope, $state, $stateParams, AuthFactory) {
//                 $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
//                     $rootScope.toState = toState;
//                     $rootScope.toStateParams = toStateParams;
//                     console.log("@ $stateChangeStart");
//
//                     AuthFactory.getUserStatus(function(result){
//                         console.log("auth-factory: " + JSON.stringify(result));
//                         if(result){
//                             deferred.resolve(result.userID);
//                             console.log("auth-factory: " + JSON.stringify(result));
//                             _identity = result;
//                             _authenticated = true;
//                             deferred.resolve(_identity);
//                             // $state.go('home',{user:result.userID});
//                         }else{
//                             _identity = null;
//                             _authenticated = false;
//                             deferred.resolve(_identity);
//                         }
//                     });
//                 });
//             }
//         ]);
// })();
