function populateTable(data) {
  // try {
    var spellListTable = document
      .getElementById("spellList")
      .getElementsByTagName("tbody")[0];

    console.log(data);

    if (data.spell) { // Check if data.spell is defined
      data.spell.forEach(spell => {
        var durationEntry = spell.duration[0];
        var row = spellListTable.insertRow();
        var levelCell = row.insertCell(0);
        var nameCell = row.insertCell(1);
        var concentration = row.insertCell(2);
        var durationCell = row.insertCell(3);
        var timeCell = row.insertCell(4);
        var rangeCell = row.insertCell(5);
        var idCell = row.insertCell(6);
        idCell.style.display = "none";
        console.log("safd");
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
    } else {
      console.log('No "spell" data found.');
    }
  // } catch (error) {
  //   console.error("Error " + error);
  // }
}



// document.addEventListener('DOMContentLoaded', async function() {
//   var spellListTable = document.getElementById("spellList");

//   if (spellListTable) {
//     var tbody = spellListTable.getElementsByTagName('tbody')[0];

//     if (tbody) {
//       try {
//         const data = await getData("http://127.0.0.1:8000/test");
//         console.log(data);
//         populateTable(data);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     } else {
//       console.error('Table body not found.');
//     }
//   } else {
//     console.error('Table with ID "spellList" not found.');
//   }
// });

// // window.onload =
// // console.log(getData("http://127.0.0.1:8000/test"));
// // populateTable(getData("http://127.0.0.1:8000/test"));