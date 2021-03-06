app.service('ProjectService', ['$http',function($http){
    var urlBase='/api/projects';
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
