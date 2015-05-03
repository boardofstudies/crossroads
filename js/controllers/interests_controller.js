app.controller('interestsController', function($scope) {
    // Get the query and use it to index mentorData
    var data = ["Fincance", "Programmer", "Leadership",
                "ripper", "double rip", "gio"];
    // Split it into a two dimensional array
    // the two arrays become "rows"
    // the contents of them become images
    $scope.data = chunk(data);
    $scope.title = "Anything here interest you?";
    
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

    $scope.chosen = [];
    /*
    $scope.addSubj = function(subj) {
        console.log(subj);
        $scope.chosen.push(subj);

        if ($scope.chosen.length == 2) {
            $location.path("/subjects/" + $scope.chosen.join("/"));
        }
    };*/
});
