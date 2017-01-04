(function(){
angular
    .module("jagameCP")
.factory('principal', ['$q', '$http', '$timeout', 'AuthFactory',
    function($q, $http, $timeout, AuthFactory) {
        var _identity = undefined,
            _authenticated = false;

        return {
            isIdentityResolved: function() {
                return angular.isDefined(_identity);
            },
            isAuthenticated: function() {
                return _authenticated;
            },
            isInRole: function(role) {
                if (!_authenticated || !_identity.roles) return false;

                return _identity.roles.indexOf(role) != -1;
            },
            isInAnyRole: function(roles) {
                if (!_authenticated || !_identity.roles) return false;

                for (var i = 0; i < roles.length; i++) {
                    if (this.isInRole(roles[i])) return true;
                }

                return false;
            },
            authenticate: function(identity) {
                _identity = identity;
                _authenticated = identity != null;
            },
            identity: function(force) {
                var deferred = $q.defer();

                if (force === true) _identity = undefined;

                // check and see if we have retrieved the
                // identity data from the server. if we have,
                // reuse it by immediately resolving
                if (angular.isDefined(_identity)) {
                    deferred.resolve(_identity);

                    return deferred.promise;
                }

                // otherwise, retrieve the identity data from the
                // server, update the identity object, and then
                // resolve.
                          AuthFactory.getUserStatus(function(result){
                              console.log("auth-factory: " + JSON.stringify(result));
                              if(result){
                                  deferred.resolve(result.userID);
                                  console.log("auth-factory: " + JSON.stringify(result));
                                  _identity = result;
                                  _authenticated = true;
                                  deferred.resolve(_identity);
                                  // $state.go('home',{user:result.userID});
                              }else{
                                  _identity = null;
                                  _authenticated = false;
                                  deferred.resolve(_identity);
                              }
                          });
                               // .then(function(data) {
                               //     console.log("getUserStatus @ principle" + data);
                               //     _identity = data;
                               //     _authenticated = true;
                               //     deferred.resolve(_identity);
                               // })
                               // .catch(function () {
                               //     _identity = null;
                               //     _authenticated = false;
                               //     deferred.resolve(_identity);
                               // });

                // for the sake of the demo, fake the lookup
                // by using a timeout to create a valid
                // fake identity. in reality,  you'll want
                // something more like the $http request
                // commented out above. in this example, we fake
                // looking up to find the user is
                // not logged in
                // var self = this;
                // $timeout(function() {
                //     self.authenticate(null);
                //     deferred.resolve(_identity);
                // }, 1000);

                return deferred.promise;
            }
        };
    }
])

})();