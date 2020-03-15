// from data.js
var tableData = data;

var tbody = d3.select("tbody");


var button = d3.select("#filter-btn");

data.forEach(function(UfoSightings) {
    var row = tbody.append("tr");
    Object.entries(UfoSightings).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
});

button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    //clears data table each time for new search
    var table = document.getElementById("ufo-table");
    for(var i = table.rows.length - 1; i > 0; i--){table.deleteRow(i);}

    //if no value is given, return all results else return date filtered results
    if(inputValue == null || inputValue == ""){

        data.forEach(function(UfoSightings) {
            var row = tbody.append("tr");
            Object.entries(UfoSightings).forEach(function([key, value]) {
              var cell = row.append("td");
              cell.text(value);
            });
        });
    } else{
        var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
        filteredData.forEach(function(UfoSightings) {
            var row = tbody.append("tr");
            Object.entries(UfoSightings).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
            });
        });
    }   
});
