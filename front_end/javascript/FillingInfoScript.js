function populateTable(data) {
  try {
    var spellListTable = document
      .getElementById("spellList")
      .getElementsByTagName("tbody")[0];

    // Use 'data.spell' instead of 'data' in the forEach loop
    data.spell.forEach((spell) => {
      var durationEntry = spell.duration[0]

      var row = spellListTable.insertRow();
      var levelCell = row.insertCell(0);
      var nameCell = row.insertCell(1);
      var concentration = row.insertCell(2);
      var durationCell = row.insertCell(3);
      var timeCell = row.insertCell(4);
      var rangeCell = row.insertCell(5);
      var idCell = row.insertCell(6);
      idCell.style.display = "none";

      idCell.innerHTML = spell.id;
      levelCell.innerHTML = spell.level;
      nameCell.innerHTML = spell.name;

      concentration.innerHTML =
        spell.duration[0] && spell.duration[0].concentration ? "Yes" : "No";

      durationCell.innerHTML =
        durationEntry.type == "timed"
          ? `${durationEntry.duration.type} ${durationEntry.duration.amount}`
          : `${durationEntry.type}`;

      timeCell.innerHTML = `${spell.time[0].number} ${spell.time[0].unit}`;
      rangeCell.innerHTML = spell.range.distance
        ? spell.range.distance.amount
          ? `${spell.range.distance.amount} ${spell.range.distance.type}`
          : spell.range.distance.type
        : spell.range.type;

      ClickChecking();
    });
  } catch (error) {
    console.error("Error " + error);
  }
}

// fetch("http://127.0.0.1:8000/test")
// .then(response => response.text())
// .then(data => {populateTable(data);})
// .catch(error => console.error('Error fetching data:', error));

// fetch("http://127.0.0.1:8000/test")
// .then(res => res.text())
// .then(text => JSON.parse(text.slice(1)))
// .then(json => console.log(json.pageItems))

// var express = require('express');
// var app = express();
// var fs = require('fs');

// app.get('/getUsers', function(req, res){
//     fs.readFile(__dirname + )
// })

window.onload = getData();
function getData() {
  const backendUrl = "http://127.0.0.1:8000/test";

  async function fetchData() {
    try {
      // Axios вже доступний як глобальний об'єкт через CDN
      const response = await axios.get(backendUrl);

      // Отримуємо дані з відповіді
      const jsonData = response.data;
      populateTable(jsonData);

      // Додаткова обробка JSON-даних тут
    } catch (error) {
      console.error("Помилка при отриманні даних:", error.message);
    }
  }

  fetchData();
}
