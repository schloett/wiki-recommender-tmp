// Listens for active search input
$("form").submit(function (event) {
    $("div").remove(".eexcess-isotope-grid-item");
    event.preventDefault();
    var input = $("#wiki-recommender-active-search").val();
    window.top.postMessage({event: 'eexcess.queryTriggered', data: input}, '*');
});

// opens the settings dialog
$('.settings-btn').click(function () {
    window.top.postMessage({event: 'eexcess.openOptions'}, '*');
});