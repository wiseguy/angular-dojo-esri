define([
        "app/js/angular/angular-route.js",
        "js/viewController",
        "js/dashboard/controller/dashboard",
        "js/tabular/controller/tabular",
        "js/map/controller/mapcontroller"
    ],
    function( /*self executing*/ ) { //main modules loaded first

        var o = {};

        o.init = function(doc) {

            require(["js/map/directives/map",
                "js/map/services/service",
                "js/dashboard/directives/dashboard",
                "js/tabular/directives/tableItem",

            ], function() {

                angular.module('projectApp', ['ngRoute',
                    "view.ctrl",
                    'app.map',
                    'app.tabular',
                    "app.dashboard"
                ]);

                console.log("bootstrapping angular app");
                angular.bootstrap(doc, ['projectApp']);


            })

        }




        return o;


    })