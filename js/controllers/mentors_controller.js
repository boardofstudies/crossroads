app.controller('mentorsController', function($scope, $routeParams) {
    // Get the query and use it to index mentorData
    data = mentorData[$routeParams.query];
    // Split it into a two dimensional array
    // the two arrays become "rows"
    // the contents of them become images
    $scope.data = chunk(data);
    
    // #itgotdesperate
    function chunk(d) {
        var res = [[], []];
        for (var i = 0; i < d.length; i++) {
            if (i < d.length/2) {
                res[0].push(d[i]);
            }else {
                res[1].push(d[i]);
            }
        }

        return res;
    }
});
