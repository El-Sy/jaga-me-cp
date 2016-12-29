(function(){
    angular
        .module("jagameCP")
        .config("jagameCPConfig",jagameCPConfig);

    jagameCPConfig.$inject = ["$stateProvider","$urlRouterProvider"];

    function jagameCPConfig($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('login',{
                url:'/login',
                views:{
                    "nav":{
                        templateUrl:"./home/navigation.html"
                    },
                    "content":{
                        templateUrl:""
                    }

                }

            })
            .state('home',{
                url:'',
                views:{
                    "nav":{
                        templateUrl:"./home/navigation.html"

                    }

                    ,
                    "content":{
                        templateUrl:""
                    }

                }

            })
            .state('appointments',{
                url:'',
                views:{
                    "nav":{
                        templateUrl:"./home/navigation.html"
                    },
                    "content":{
                        templateUrl:""
                    }

                }

            })
            .state('patient',{
                url:'',
                views:{
                    "nav":{
                        templateUrl:"./home/navigation.html"
                    },
                    "content":{
                        templateUrl:""
                    }

                }

            })
            .state('payments',{
                url:'',
                views:{
                    "nav":{
                        templateUrl:"./home/navigation.html"
                    },
                    "content":{
                        templateUrl:""

                        }
                    }

            })

            .state('user',{
                url:'',
                views:{
                    "nav":{
                        templateUrl:"./home/navigation.html"
                    },
                    "content":{
                        templateUrl:""
                    }

                }

            })
    }


})();