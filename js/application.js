'use strict';
 
(function () {
  $(document).ready(function () {
    // Initialises Tableau Data Extension

    document.write("Hello");
    tableau.extensions.initializeAsync().then(function () {
      refresh();
    }, function () { console.log('Error while Initializing: ' + err.toString()); });
  });
 
  function refresh() {
    // Gets a list of the worksheets and adds them to the web page.
    $("#worksheets").text("Hasdfasdfs");
    const workSheets = tableau.extensions.dashboardContent.dashboard.worksheets;
    workSheets.forEach(function (worksheet) {
        $("#worksheets").append(`<button class='btn btn-secondary btn-block'>Hi</button>`);
    });
  }
})();
