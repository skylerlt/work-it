var app = angular.module("mainApp");

app.controller("CalorieController", ["$scope", "CalorieService", function ($scope, CalorieService) {

    $scope.calorieService = CalorieService;

    $scope.getUserActivity = function (id) {
        $scope.calorieService.getActivity(id)
            .then(function () {
                return activityId;
            })
    };


}]);
