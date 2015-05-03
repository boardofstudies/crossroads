app.controller('subjectController', function($scope) {
    $scope.subjects = [];

    $scope.add = function() {
        var s = $scope.subject;
        $scope.subjects.push(s);
        $scope.subject = "";
    };
});
