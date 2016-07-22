var app = angular.module("mainApp");

app.service("CalorieService", ["$http", function ($http) {

    this.getActivity = function (id) {
        var config = {
            headers: {
                "Api-Key": "hbju6f63sfsdpxk68zjx7hxag8uqatbm",
                "Content-Type": "application/json"
            }
        };

        return $http({
            method: "Get",
            url: "https://oauth2-api.mapmyapi.com/v7.1/activity_type/" + id,
            headers: {
                "Authorization": "Bearer ffa49f224f844acc1957797cee68f1a1b0d1eeec"
            },
            config
        }).success();
    }

}])
