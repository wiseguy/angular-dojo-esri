define(["lib/angular","dashboard/controller/dashboard"], function() {

   require(["lib/angular-mocks"],function(){

    console.log("Dahsboard Contyroller Unit");
      describe('Unit: Dahsboard Controller', function() {
    // Load the module with MainController
    beforeEach(module('app.dashboard.ctrl'));


    var ctrl, scope, rootScope;
    //rootSope.$broadcast("$stateChangeStart", event, toState, toParams);
    // inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach(inject(function($controller, $rootScope) {
      // Create a new scope that's a child of the $rootScope
      rootScope = $rootScope;
      scope = $rootScope.$new();
      // Create the controller
      ctrl = $controller('DashCtrl', {
        $scope: scope
      });

      spyOn(rootScope, '$broadcast').andCallThrough();
    }));

    it('should create $scope.name as none', 
      function() {        
        
        expect(scope.stateName).toEqual("none");
        //rootScope.$broadcast("$stateChangeStart", event, toState, toParams);
    });

    it("should broadcast something", function() {
        var dummyFeature = {};
        rootScope.$broadcast('handleShowChart');
        //spyOn(rootScope, '$broadcast').andCallThrough();
        
        expect(rootScope.$broadcast).toHaveBeenCalledWith('handleShowChart');

    });
  })

   });
  
 
 // return {};
  
})