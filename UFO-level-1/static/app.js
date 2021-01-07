// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// // Append one table row `tr` to the table body
// var row = tbody.append("tr");

// // Append one cell for the student name
// row.append("td").text(newGrade[0]);

// // Append one cell for the student grade
// row.append("td").text(newGrade[1]);

// Loop through the data to build the table
for (let sighting of tableData) {
    var row = tbody.append("tr");
    row.append("td").text(sighting.datetime);
    console.log(sighting.datetime);
    row.append("td").text(sighting.city);
    row.append("td").text(sighting.state);
    row.append("td").text(sighting.country);
    row.append("td").text(sighting.shape);
    row.append("td").text(sighting.comments);
}
