define(["lib/angular"], function() {

    (function() {
        console.log("DASHBOARD ADDED");
        window.angular.module("app.dashboard", [])
            .controller('DashCtrl', function($scope) { //separate this to a service


                /*  $scope.constructChart = function(feature){
           		console.log("Drawing Chart from dashboard controller");
           }
*/
                $scope.stateName = "none";
                $scope.$on('handleShowChart', function() {
                    console.log("handle show chart");
                    var feature = arguments[1];
                    if (!feature) {
                        return; //a test will pass
                    }
                    var attr = feature.attributes;
                    $scope.stateName = feature.attributes.NAME;
                    var data = {
                        labels: ["2013", "2011", "2009", "2007"],
                        datasets: [{
                            fillColor: "rgba(220,220,220,0.5)",
                            strokeColor: "rgba(220,220,220,1)",
                            data: [attr.M8_2013, attr.M8_2011, attr.M8_2009, attr.M8_2007]
                        }, {
                            fillColor: "rgba(151,187,205,0.5)",
                            strokeColor: "rgba(151,187,205,1)",
                            data: [attr.R8_2013, attr.R8_2011, attr.R8_2009, attr.R8_2007]
                        }]
                    }

                    var options = {

                        //Boolean - If we show the scale above the chart data     
                        scaleOverlay: false,

                        //Boolean - If we want to override with a hard coded scale
                        scaleOverride: false,

                        //** Required if scaleOverride is true **
                        //Number - The number of steps in a hard coded scale
                        scaleSteps: null,
                        //Number - The value jump in the hard coded scale
                        scaleStepWidth: null,
                        //Number - The scale starting value
                        scaleStartValue: null,

                        //String - Colour of the scale line 
                        scaleLineColor: "rgba(0,0,0,.1)",

                        //Number - Pixel width of the scale line  
                        scaleLineWidth: 1,

                        //Boolean - Whether to show labels on the scale 
                        scaleShowLabels: true,

                        //Interpolated JS string - can access value
                        scaleLabel: "<%=value%>",

                        //String - Scale label font declaration for the scale label
                        scaleFontFamily: "'Arial'",

                        //Number - Scale label font size in pixels  
                        scaleFontSize: 12,

                        //String - Scale label font weight style  
                        scaleFontStyle: "normal",

                        //String - Scale label font colour  
                        scaleFontColor: "#666",

                        ///Boolean - Whether grid lines are shown across the chart
                        scaleShowGridLines: true,

                        //String - Colour of the grid lines
                        scaleGridLineColor: "rgba(0,0,0,.05)",

                        //Number - Width of the grid lines
                        scaleGridLineWidth: 1,

                        //Boolean - If there is a stroke on each bar  
                        barShowStroke: true,

                        //Number - Pixel width of the bar stroke  
                        barStrokeWidth: 2,

                        //Number - Spacing between each of the X value sets
                        barValueSpacing: 5,

                        //Number - Spacing between data sets within X values
                        barDatasetSpacing: 1,

                        //Boolean - Whether to animate the chart
                        animation: true,

                        //Number - Number of animation steps
                        animationSteps: 60,

                        //String - Animation easing effect
                        animationEasing: "easeOutQuart",

                        //Function - Fires when the animation is complete
                        onAnimationComplete: null

                    }

                    require(["js/libs/chartjs"], function() {
                        var barChart = new Chart(document.getElementById("canvas").getContext("2d")).Bar(data, options);
                    })





                })



            })
    })()


})