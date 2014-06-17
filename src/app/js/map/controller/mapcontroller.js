define([], function() {

    (function() {
        angular.module("app.map", [])
            .controller('MapCtrl', function($scope, $rootScope, mapService) { //separate this to a service
                var theData;
                mapService.then(function(data) {

                    //$scope.data = data;
                    theData = data;
                    console.log(data);

                })
                $scope.mapCreated = false;
                $scope.createMap = function() {

                    //only if view is map, and only once
                   //alert($scope.map);
                    if ((!$scope.map && $scope.mapCreated) || !theData || $scope.mapCreated) {
                        //alert("cant be created");
                        return;
                    }
                    // alert("isolate scope create map");
                    console.log($scope.map);
                    console.log($scope.mapCreated);
                    console.log("Creating map");
                    $scope.mapCreated = true;

                    // alert("create map view");
                    require(["esri/map", "dijit/registry", "dijit/layout/ContentPane", "esri/graphic", "esri/geometry/Polygon",
                        "esri/SpatialReference", "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "dojo/_base/Color"
                    ], function(Map, registry, ContentPane, Graphic, Polygon, SpatialReference, SimpleFillSymbol, SimpleLineSymbol, Color) {

                        var data = theData;//$scope.data;

                        console.log(" got data in map directive ");
                        console.log(" Creating map only one time ");

                        console.log(data);
                        
                        var sfs = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                            new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
                                new Color([255, 0, 0]), 2), new Color([255, 255, 0, 0.25]));
                        new ContentPane({
                            id: "mapCP",
                            style: "width:300px;height:200px"
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