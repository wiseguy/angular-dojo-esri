define([], function() {

    (function() {
        angular.module("app.map", [])
            .controller('MapCtrl', function($scope, $rootScope, mapService) { //separate this to a service

                mapService.then(function(data) {

                    $scope.data = data;

                })
                $scope.mapCreated = false;
                $scope.createMap = function() {

                    //only if view is map, and only once

                    if (!$scope.mapCreated) {
                        return;
                    }
                    // alert("isolate scope create map");
                    alert($scope.map);
                    $scope.mapCreated = true;

                    // alert("create map view");
                    require(["esri/map", "dijit/registry", "dijit/layout/ContentPane", "esri/graphic", "esri/geometry/Polygon",
                        "esri/SpatialReference", "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "dojo/_base/Color"
                    ], function(Map, registry, ContentPane, Graphic, Polygon, SpatialReference, SimpleFillSymbol, SimpleLineSymbol, Color) {

                        var data = $scope.data;

                        console.log(" got data in map directive ");
                        var sfs = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                            new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
                                new Color([255, 0, 0]), 2), new Color([255, 255, 0, 0.25]));
                        new ContentPane({
                            id: "mapCP",
                            style: "width:100%;height:100%"
                        }, "mapDiv");
                        var map = new Map("mapCP", {
                            "id": "myMap",
                            "basemap": "hybrid",
                            "zoom": 4,
                            "center": [-77, 38]
                        });
                        //$scope.map = map;


                        map.on("load", function() {

                            angular.forEach(data.features, function(feature) {
                                var poly = new Polygon({
                                    "rings": feature.geometry.rings,
                                    "spatialReference": {
                                        "wkid": 102100
                                    }
                                });
                                var g = new Graphic(poly, sfs, feature.attributes, null);
                                map.graphics.add(g);
                            });

                            registry.byId("mapCP").resize();
                            map.resize();

                        });

                    })

                };

                $scope.$on('createMapView', function() {




                })









            })
    })()


})