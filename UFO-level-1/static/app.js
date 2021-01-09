// from data.js
var tableData = data;

// Loop through the data to build the table and form inputs
for (let sighting of tableData) {
    // Building the table
    buildTable(tableData);

    // Building the form
    // TODO: MAKE THIS UNIQUE
    d3.select("#cityInput").append("option").text(sighting.city);
    d3.select("#stateInput").append("option").text(sighting.state);
    d3.select("#countryInput").append("option").text(sighting.country);
    d3.select("#shapeInput").append("option").text(sighting.shape);
}

d3.select("#submit").on("click", filterIt);
// TODO: reset the table & form
d3.select("#reset").on("click", buildTable(tableData));

function filterIt() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    var dateInput = d3.select("#dateInput").node().value;
    var filtered = tableData.filter(d => d.datetime === dateInput);
    buildTable(filtered);
}

function buildTable(theData) {
    var tbody = d3.select("tbody");
    d3.select('tbody').html('')
    for (let sighting of theData) {
        var row = tbody.append("tr");
        row.append("td").text(sighting.datetime);
        row.append("td").text(sighting.city);
        row.append("td").text(sighting.state);
        row.append("td").text(sighting.country);
        row.append("td").text(sighting.shape);
        row.append("td").text(sighting.comments);
    }
}
