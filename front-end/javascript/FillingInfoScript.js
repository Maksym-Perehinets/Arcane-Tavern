function populateTable(data) {
    var spellListTable = document.getElementById("spellList")

    

}




fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Call a function to populate the table with the parsed JSON data
        populateTable(data);
    })
    .catch(error => console.error('Error fetching data:', error));