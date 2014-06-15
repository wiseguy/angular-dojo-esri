define([], function() {

    (function() {
        angular.module("app.tabular", [])
            .controller('DataCtrl', function($scope, $rootScope, mapService) { //separate this to a service


                mapService.then(function(data) {
                    console.log(" got data in tabular ");
                    $scope.data = data;

                })

                $scope.logFeature = function(feature) {
                    $rootScope.$broadcast('handleShowChart', feature);

                }


                /*$scope.setSelectedFeature = function(feature) {
            alert(feature);
            $scope.selectedFeature = feature;


          }*/




            })
    })()


})