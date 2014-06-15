define([], function() {
    (function() {

        angular.module('app.tabular')
            .directive('tableItem', function() {
                return {
                    restrict: 'E',
                    scope: {
                        feature: "=",
                        title: "=",
                        log: '&',
                        switchdash: '&',
                        drawchart: '&'
                    }
                    //,transclude:true
                    //,template: "<strong>{{feature.attributes.NAME}}</strong>"
                    ,
                    replace: true //only one root element should be present
                    ,
                    templateUrl: "app/js/tabular/partial/tableItem.htm",
                    link: function(scope, element, attrs) { //to do something with Dom elements, not dependency injected

                        /*element.on("click",function(){
						console.log(arguments);
					})*/
                    },
                    controller: function($scope) {
                        //console.log($scope.feature);		
                        /*$scope.setSelectedFeature = function(feature) {
            			alert("from directive");
          			}	*/
                    }

                }
            })


    })()
    return {}
})