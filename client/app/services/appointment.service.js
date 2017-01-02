(function () {
    angular
        .module("jagameCP")
        .service("apptService", apptService);

    apptService.$inject=["$http", "$q"];

    function apptService($http, $q){
        var vm = this;


        vm.apptSearch = function apptSearch(){


            var defer = $q.defer();
            $http
            .get("http://demo1381866.mockable.io/v1/appointments",{
            })
            .then(function(res){
                console.log(res);
                defer.resolve(res);

            })
            .catch(function(err){

            });
            return(defer.promise);
        }

    }

})();