// from data.js
var tableData = data;

d3.select("#submit").on("click", filterIt);
d3.select("form").on("submit",filterIt);
d3.select("#reset").on("click", filterIt);

function filterIt() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    if (this.id === "reset"){ buildPage(tableData);}
    else {
        var dateInput = d3.select("#dateInput").node().value;
        var filtered = tableData.filter(d => d.datetime === dateInput);
        buildPage(filtered);
    }
}

function buildPage(theData) {
    var tbody = d3.select("tbody");
    tbody.html('')
    for (let sighting of theData) {
        // Build the table
        var row = tbody.append("tr");
        row.append("td").text(sighting.datetime);
        row.append("td").text(sighting.city);
        row.append("td").text(sighting.state);
        row.append("td").text(sighting.country);
        row.append("td").text(sighting.shape);
        row.append("td").text(sighting.comments);

        // Build the form
        //TODO make entries unique
        d3.select("#cityInput").append("option").text(sighting.city);
        d3.select("#stateInput").append("option").text(sighting.state);
        d3.select("#countryInput").append("option").text(sighting.country);
        d3.select("#shapeInput").append("option").text(sighting.shape);
    }
}
buildPage(tableData);