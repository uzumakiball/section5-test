
app.controller('ProjectController', ['$scope', 'ProjectService',
    function ($scope, ProjectService) {
    $scope.status;
    $scope.projects;
    $scope.Project = {
        Id: '',
        projectName: ''
    };
    getProjects();
    function getProjects() {
        ProjectService.getAllProjects()
            .then(function (response) {
                $scope.projects = response.data;
            }, function (error) {
                $scope.status = 'Unable to load Project data: ' + error.message;
            });
    }

    $scope.updateProjects = function (id) {
        var proj;
        for (var i = 0; i < $scope.projects.length; i++) {
            var currProj = $scope.projects[i];
            if (currProj.id === id) {
                proj = currProj;
                break;
            }
        }

         ProjectService.updateProjects(proj)
          .then(function (response) {
              $scope.status = 'Updated Project! Refreshing project list.';
          }, function (error) {
              $scope.status = 'Unable to update Project: ' + error.message;
          });
    };

    $scope.insertProjects = function () {
        ProjectService.insertProjects(proj)
            .then(function (response) {
                $scope.status = 'Inserted Project! Refreshing customer list.';
                $scope.projects.push(response.data);
            }, function(error) {
                $scope.status = 'Unable to insert Project: ' + error.message;
            });
    };

    $scope.deleteProjects = function (id) {
        ProjectService.deleteProjects(id)
        .then(function (response) {
            $scope.status = 'Deleted Project! Refreshing Project list.';
            for (var i = 0; i < $scope.projects.length; i++) {
                var proj = $scope.projects[i];
                if (proj.id === id) {
                    $scope.projects.splice(i, 1);
                    break;
                }
            }
        }, function (error) {
            $scope.status = 'Unable to delete Project: ' + error.message;
        });
    };

}]);
