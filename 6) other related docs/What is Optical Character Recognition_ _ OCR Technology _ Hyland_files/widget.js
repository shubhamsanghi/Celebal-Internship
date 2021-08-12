window._hlyc = "https://cdn.hushly.com/assets/widget-aec67b16d248181c996fcb8aaeffff2e.js";
hushly.api = "https://app.hushly.com/";
hushly.cdn = "https://app.hushly.com/";
hushly.css = "https://app.hushly.com/assets/widget-61d14190457514da40352ba2ad255545.css";
hushly.loader = "https://app.hushly.com/assets/widget-loader-55cdd238aba10bd8e0369bae81f4b864.js";
hushly.scripts = [
    "https://app.hushly.com/assets/widget-lib-1-7d6903cc3eccba5514d58fdf2ac4e02f.js",
    "https://app.hushly.com/assets/widget-lib-2-d20043c1a52224f90ce45264049c5eb2.js",
    "https://app.hushly.com/assets/widget-core-2f1ab69ea3ca47b8fcbdc198b16d7110.js"
]


var widgetSource = "https://app.hushly.com/assets/widget-22112d28e18f8665e97b9fb9d1362b02.js";
"undefined" != typeof window._hlyc && (widgetSource = window._hlyc),

function() {
    var scriptTag = document.createElement("script"); 
    scriptTag.type = "text/javascript"; 
    scriptTag.async = true; 
    scriptTag.src = widgetSource; 
    (document.getElementsByTagName("head")[0] 
                    || document.documentElement).appendChild(scriptTag);
}();
