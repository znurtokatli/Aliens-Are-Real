/**
 * @author Zehra Tokatli <github.com/znurtokatli>
 */

//references
var tableData = data;  
var tbody = d3.select("tbody"); 

var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");

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

populateUfoTable(tableData);

//Part2 - Date Search On Table///////////////////////////////

//page event for filtered data
function dateSearch() {
    
    d3.event.preventDefault();  

    var filteredData = tableData.filter( populateUfoTable => populateUfoTable.datetime === inputDate.property("value")); 

    populateUfoTable(filteredData);
};

inputDate.on("change", dateSearch);
//buttonFilter.on("click", dateSearch);  

//Part3 - Multiple Criteria Search///////////////////////////////
 /* 
function filterPage() {

    d3.event.preventDefault(); 
 

    filteredData = filteredData.filter( populateUfoTable => populateUfoTable.city === inputCity.property("value")); 


    var cityValue = inputCity.property("value").toLowerCase().trim();
    var stateValue = inputState.property("value").toLowerCase().trim();
    var countryValue = inputCountry.property("value").toLowerCase().trim();    
    var shapeValue = inputShape.property("value").toLowerCase().trim();
   
    if (cityValue != "") {
         filterData = filterData.filter(entry => entry.city === cityValue);     
    }
    if (stateValue != "") {
         filterData = filterData.filter(entry => entry.state === stateValue);     
    }
    if (countryValue != "") {
         filterData = filterData.filter(entry => entry.country === countryValue);     
    }
    if (shapeValue != "") {
         filterData = filterData.filter(entry => entry.shape === shapeValue);     
    }  

    populateUfoTable(filteredData);
};


//buttonFilter.on("click", filterPage);   */