app.service('ProjectService', ['$http',function($http){
    var urlBase='http://192.168.1.7:53581/api/projects';
        this.getAllProjects=function(){
           return $http.get(urlBase);
       };
        this.getProjects = function (id) {
            return $http.get(urlBase + '/' + id);
        };

        this.insertProjects = function (proj) {
            return $http.post(urlBase, proj);
        };

        this.updateProjects = function (proj) {
            return $http.put(urlBase + '/' + proj.id, proj)
        };

        this.deleteProjects = function (id) {
            return $http.delete(urlBase + '/' + id);
        };
}]);
