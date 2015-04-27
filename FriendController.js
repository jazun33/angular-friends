var app = angular.module('angularFriends');
app.controller('ctrl', function($scope, $http){

    //$scope.friends;

    //import friends-data.json and assign it to $scope.friends
    $http.get('friend-data.json').then( function(res) {
            $scope.friends = res.data;
        });

});