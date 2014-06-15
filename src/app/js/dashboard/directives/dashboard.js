define([], function() {
    (function() {

        angular.module('app.dashboard')
            .directive('chartWidget', function() {
                return {
                    restrict: 'E',
                    scope: {

                    }
                    //,transclude:true
                    //,template: "<strong>{{feature.attributes.NAME}}</strong>"
                    ,
                    replace: true //only one root element should be present
                    ,
                    templateUrl: "app/js/dashboard/partial/chartWidget.htm",
                    controller: function($scope) {
                        //console.log($scope.feature);		
                        //alert("create widget");
                        $scope.test = "aaa";
                    }

                }
            })


    })()
    return {}
})