(function(){
    angular
        .module('jagameCP')
        .factory('AuthFactory', AuthFactory);

    AuthFactory.$inject = ['$q','$timeout', '$http', '$state', 'Flash'];

    function AuthFactory($q, $timeout, $http, $state, Flash){

        var user = null;

        return({
            isLoggedIn: isLoggedIn,
            getUserStatus: getUserStatus,
            login: login,
            logout: logout,
            register: register
        });

        function isLoggedIn(){
            if(user){
                return true;
            }else {
                return false;
            }
        }

        function getUserStatus(callback){
            $http
                .get('/status/user')
                .then(function (res){

                    // var authResult = JSON.stringify(res);
                    if(res.status = 200){
                        console.log("inside if getUserStatus: " + JSON.stringify(res['data']));
                        user = {
                            result: true,
                            userID: res.data.userID
                        };
                        callback(user);
                    }else{
                        user = false;
                        callback(user);
                        // $state.go("login");
                    }
                })
                .catch(function(err){

                })
        }

        function login(userProfile){
            var deferred = $q.defer();
            console.log("in login1");
            //console.log(userProfile);
            $http
                .post('/login', userProfile)
                .then(function(data, status){
                    // console.log(" at getUserStatus " + JSON.stringify(data.userID));
                    var userID = data.userID;
                    // console.log("in login2");
                    // console.log("login data: " + JSON.stringify(data));
                    // console.log("login status: " + JSON.stringify(status));
                    // console.log("login ID: " + JSON.stringify(userID));
                    if(data.status == 200){
                        getUserStatus(function(result){
                            console.log("auth-factory: " + JSON.stringify(result));
                            if(result){
                                deferred.resolve(result.userID);
                                console.log("auth-factory: " + JSON.stringify(result));
                                // $state.go('home',{user:result.userID});
                            }else{
                                deferred.reject();
                                $state.go('login');
                            }
                        });
                    }else{
                        user = false;

                    }
                })
                .catch(function(data){
                    user = false;
                    Flash.clear();
                    Flash.create('danger', "Oops having issue logging in", 0, {})
                    deferred.reject();
                });
            return deferred.promise;
        }

        function logout(){
            var deferred = $q.defer();
            $http.get('/logout')
                .success(function(data){
                    user = false;
                    deferred.resolve();
                })
                .error(function(data){
                    user = false;
                    deferred.reject();
                });
            return deferred.promise;
        }

        function register(username, password){
            var deferred = $q.defer();

            $http
                .post('/register',
                    {username: username, password: password})
                .success(function(data, status){
                    if(status){
                        deferred.resolve();
                    } else{
                        deferred.reject();
                    }
                })
                .error(function(data){
                    deferred.reject();
                });
            return deferred.promise;
        }
    }
})();