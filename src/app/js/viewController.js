define(["dijit/registry"], function(registry) {

    (function() {
        angular.module("view.ctrl", [])
            .controller('ViewCtrl', function($scope, $location, $rootScope) { //separate this to a service

                var s = $scope;
                s.map = true;
                s.dashboard = false;
                s.tabular = false;

                //s.createMap = ;

                s.mapInitialized = false;




                s.$on('$locationChangeSuccess', function(event) {
                    s.map = false;
                    s.dashboard = false;
                    s.tabular = false;
                    // s.$apply("createMap()");
                    s[$location.path().substring(1)] = true;
                    //$rootScope.$broadcast('msgid', msg);
                    if (s.map) {
                        if (!s.mapInitialized) {
                            $rootScope.$broadcast('createMapView');
                            //alert("create map");
                            //s.createMap();
                        }
                        s.mapInitialized = true;
                        console.log(registry.byId("mapCP"));

                        if (registry.byId("mapCP")) {
                            registry.byId("mapCP").resize();
                        }
                    }
                });


                $scope.switchToDashboard = function(feature) {
                    console.log("switch to dashboard")
                    s.map = false;
                    s.dashboard = true;
                    s.tabular = false;
                }

            })
    })()


})