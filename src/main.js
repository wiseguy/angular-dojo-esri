//var dojoConfig;

/* Checks for Div with ID project, Load Dojo First, Then Angular*/
(function() {
    'use strict';

    var esriApi = "http://js.arcgis.com/3.9/";
    var esriCss = "app/css/app.css";
    var appCss = "http://js.arcgis.com/3.9/js/esri/css/esri.css";
    var version = "0.1";
    var pathPrefix = document.location.pathname.replace(/\/[^/]+$/, "");

    console.log("dojoConfig defined");
    var dojoConfig = {
        parseOnLoad: false,
        isDebug: false,
        async: true,
        //cacheBust: "v=" + version,
        packages: [{
            name: "map",
            location: pathPrefix + "/app/js/map"
        }, {
            name: "dashboard",
            location: pathPrefix + "/app/js/dashboard"
        }, {
            name: "tabular",
            location: pathPrefix + "/app/js/tabular"
        }, {
            name: "lib",
            location: pathPrefix + "/lib"
        }, {
            name: "js",
            location: pathPrefix + "/app/js"
        }, ], //http://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.8 
        deps: [ //load angular now

            "dojo/ready", "dojo/dom", "dojo/text!./body.htm", "dojo/dom-class", "dojo/domReady!", "dojo/query", "dojo/dom-attr", "dojo/NodeList-manipulate", "lib/angular"
            //, "app/js/angular/angular-route.js"

        ],
        callback: function(ready, dom, bodyHTML, domClass, domReady, dojoQuery, domAttr) {

            /*if (!dom.byId("project")){
              console.log("Project div not defined");
              return;
            }

            console.log("create the ng-view directive")
            dojoQuery("#project").forEach(function(node){
              domAttr.set(node, "ng-view", "");  
            })*/

            //insert body HTML

            dojoQuery("body").append(bodyHTML);

            angular.element(document).ready(function() {
                console.log("document ready");

                require(["js/loadAngularModules"],
                    function(loadAngularModules) {
                        loadAngularModules.init(document);

                    })
            });

        } // End callback
    }

    window.dojoConfig = dojoConfig;
    var loadScript = function(src, attrs) {
        var s = document.createElement('script');
        s.setAttribute('src', src);
        for (var key in attrs) {
            if (attrs.hasOwnProperty(key)) {
                s.setAttribute(key, attrs[key]);
            }
        }
        document.getElementsByTagName('head')[0].appendChild(s);
    };

    var loadStyle = function(src, isCDN) {
        var l = document.createElement('link'),
            path = isCDN ? src : src + "?v=" + version;
        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('type', 'text/css');
        l.setAttribute('href', path);
        document.getElementsByTagName('head')[0].appendChild(l);
    };

    var loadConfiguration = function() {
        console.log("loadConfiguration");

        loadScript(esriApi);
        loadStyle(esriCss, true);
        loadStyle(appCss, false);
        /*loadStyle(config.arcgis.css, true);
    // Load css
    var i, files = config.css[ENV], length = files.length;
    for (i = 0; i < length; i++) {
      loadStyle(files[i].src, files[i].cdn);
    }*/
    };

    if (document.readyState === "loaded") {
        loadConfiguration();
    } else {
        window.onload = loadConfiguration;
    }

})();