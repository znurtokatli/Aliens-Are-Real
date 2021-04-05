/**
 * @author Zehra Tokatli <github.com/znurtokatli>
 */

//references
var tableData = data; 

var tbody = d3.select("tbody"); 
var inputDate = d3.select("#datetime");
var buttonFilter = d3.select("filter-btn");
 
//Part1 - Import Data to Table///////////////////////////////

//generate given object data into table 
function populateUfoTable(pData) {

    tbody.text("");

    pData.forEach(function(ufoTable) {
        tableRow = tbody.append("tr");

        Object.entries(ufoTable).forEach(function([key, value]) {

            tableCol = tableRow.append("td");
            tableCol.text(value);
        })
    })
};

populateUfoTable(tableData)

//Part2 - Date Search On Table///////////////////////////////

//page event for filtered data
function dateSearch() {
    
    d3.event.preventDefault();  

    var filteredData = tableData.filter( populateUfoTable => populateUfoTable.datetime === inputDate.property("value")); 

    populateUfoTable(filteredData);
};

inputDate.on("change", dateSearch);

//Part3 - Category Search///////////////////////////////

