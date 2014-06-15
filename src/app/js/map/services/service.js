define(["esri/tasks/query", "esri/tasks/QueryTask", "lib/angular"], function(Query, QueryTask) {

    (function() {
        console.log("SERVICE ADDED");
        angular.module('app.map')
            .service('mapService', function() {
                console.log(" IN MAP SERVICE ");
                //require(["esri/tasks/query", "esri/tasks/QueryTask"], function(Query, QueryTask) { 
                var query = new Query();
                query.where = "1=1";
                query.returnGeometry = true;
                query.maxAllowableOffset = 2000;
                query.outFields = ["M8_2013", "M8_2011", "M8_2009", "M8_2007", "R8_2013", "R8_2011", "R8_2009", "R8_2007", "NAME", "STATE"];

                var queryTask = new QueryTask("http://gisdev.sanacloud.com/arcgis/rest/services/storymaps/naep_story_map/MapServer/6");
                var promise = queryTask.execute(query);

                return promise;
                /*var factory = {};

            factory.getQueryResults = functions(){
                return promise;
            }
            */
            })

    })()









    return {}

})