// Load extra html files into page
function loadPage(func) {
    $(function(){
        document.body
            .prepend(
                Object.assign(document.createElement('div'),{ id:'navBar'})
            )
        $("#navBar").load("/html/navBar.html", function() { });

        if (func) func();
    });
}