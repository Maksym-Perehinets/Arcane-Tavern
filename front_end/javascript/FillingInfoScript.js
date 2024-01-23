// function populateTable(data) {
//     var spellListTable = document.getElementById("spellList").getElementsByTagName('tbody')[0];

//     // Check if 'data.spell' is an array--

//     // if (data.spell.length === 0) {
//     //     console.warn('Data.spell array is empty.');
//     //     return;
//     // }
    

//     // Use 'data.spell' instead of 'data' in the forEach loop
//     // data.forEach(data => {
//         var row = spellListTable.insertRow();
//         var levelCell = row.insertCell(0);
//         var nameCell = row.insertCell(1);
//         var concentration = row.insertCell(2);
//         var durationCell = row.insertCell(3);
//         var timeCell = row.insertCell(4);
//         var rangeCell = row.insertCell(5);

//         levelCell.innerHTML = data.level;
//         nameCell.innerHTML = data.name;

//         concentration.innerHTML =
//             data.duration[0] && data.duration[0].concentration 
//             ? "Yes"
//             : "No";
            
//         durationCell.innerHTML = 
//             data.duration.type == "timed"
//             ? `${data.duration.type} ${data.duration.amount}` 
//             : `${data.duration[0].type}`;

//         timeCell.innerHTML = `${data.time[0].number} ${data.time[0].unit}`;
//         rangeCell.innerHTML = 
//             data.range.distance
//             ? data.range.distance.amount
//                 ? `${data.range.distance.amount} ${data.range.distance.type}`
//                 : data.range.distance.type
//             : data.range.type;
//     // });
// }

    


// // fetch("http://127.0.0.1:8000/test")
// // .then(response => response.text())
// // .then(data => {populateTable(data);})
// // .catch(error => console.error('Error fetching data:', error));
    

// // fetch("http://127.0.0.1:8000/test")
// // .then(res => res.text())
// // .then(text => JSON.parse(text.slice(1)))
// // .then(json => console.log(json.pageItems))


// // var express = require('express');
// // var app = express();
// // var fs = require('fs');

// // app.get('/getUsers', function(req, res){
// //     fs.readFile(__dirname + )
// // })



// const backendUrl = 'http://localhost:8000/test';

// async function fetchData() {
//   try {
//     // Axios вже доступний як глобальний об'єкт через CDN
//     const response = await axios.get(backendUrl);

//     // Отримуємо дані з відповіді
//     const jsonData = response.data;
//     populateTable(jsonData);

//     // Додаткова обробка JSON-даних тут
//   } catch (error) {
//     console.error('Помилка при отриманні даних:', error.message);
//   }
// }

// fetchData();

// --------------------------------------------------------------------------------------------------

function populateTable(data) {
  var spellListTable = document.getElementById("spellList").getElementsByTagName('tbody')[0];

  // Check if 'data.spell' is an array--

  if (data.spell.length === 0) {
      console.warn('Data.spell array is empty.');
      return;
  }
  

  // Use 'data.spell' instead of 'data' in the forEach loop
  data.spell.forEach(spell => {
      var durationEntry = spell.duration[0]
      var row = spellListTable.insertRow();
      var levelCell = row.insertCell(0);
      var nameCell = row.insertCell(1);
      var concentration = row.insertCell(2);
      var durationCell = row.insertCell(3);
      var timeCell = row.insertCell(4);
      var rangeCell = row.insertCell(5);

      levelCell.innerHTML = spell.level;
      nameCell.innerHTML = spell.name;

      concentration.innerHTML =
          spell.duration[0] && spell.duration[0].concentration 
          ? "Yes"
          : "No";
          
      durationCell.innerHTML = 
          durationEntry.type == "timed"
          ? `${durationEntry.duration.type} ${durationEntry.duration.amount}` 
          : `${durationEntry.type}`;

      timeCell.innerHTML = `${spell.time[0].number} ${spell.time[0].unit}`;
      rangeCell.innerHTML = 
          spell.range.distance
          ? spell.range.distance.amount
              ? `${spell.range.distance.amount} ${spell.range.distance.type}`
              : spell.range.distance.type
          : spell.range.type;
  });
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



// Замініть URL на адресу вашого бекенду
const backendUrl = 'http://127.0.0.1:5500/json_parser/spells_json/spells-phb.json';

async function fetchData() {
try {
  // Axios вже доступний як глобальний об'єкт через CDN
  const response = await axios.get(backendUrl);

  // Отримуємо дані з відповіді
  const jsonData = response.data;

  console.log(jsonData.name);
  populateTable(jsonData);

  // Додаткова обробка JSON-даних тут

} catch (error) {
  console.error('Помилка при отриманні даних:', error.message);
}
}

// Викликаємо функцію для отримання даних
fetchData();
