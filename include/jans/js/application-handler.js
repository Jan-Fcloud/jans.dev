/*
Sample app-meta attribute value:
- app-meta="sample-folder;400;x;folder"

[0] - "sample-folder" - folder name
[1] - 400 - width
[2] - x - height (x = auto)
[3] - folder - app type

Each app will have a class name only the actual 
window html have and the icon html have.

An exmaple class would be:
"app-x83hf092jf"

- The window has that class + its class identifier "app"
- The icon has that class + its class identifier "app-icon"

Ofc this type of system is only for the start.
Later on, everything will be loaded via JS and won't be hardcoded in the HTML.
*/

$(document).ready(function() {
    let appList = $('.app');
});

function init_app(toInit) {
    var app = new Application();
    app.init();
}

