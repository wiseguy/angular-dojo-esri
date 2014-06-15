define([],

    function() {

        (function() {

            angular.module('app.map')
                .directive('mapContainer', function() {
                    return {
                        restrict: 'E',
                        scope: {
                            createthemap: "&"
                        },
                        //,transclude:true
                        //,template: "<strong>{{feature.attributes.NAME}}</strong>"

                        replace: true, //only one root element should be present

                        templateUrl: "app/js/map/partial/map.htm",
                        controller: function($scope) {


                        }

                    };
                });
        })();
        return {};

    });