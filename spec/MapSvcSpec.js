define(["lib/angular", "map/services/service"], function() {

    require(["lib/angular-mocks"], function() {

        console.log("Map Service Spec");
        describe('Unit: MapService', function() {
            // Load the module with MainController
            beforeEach(module('app.map.service'));

            it('should contain a mapService',
                inject(function(mapService) {
                    expect(mapService).not.toEqual(null);
                }));
        })

    })


    // return {};

})