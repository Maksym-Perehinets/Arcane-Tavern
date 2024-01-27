function populateTable(data) {
  try {
    var spellListTable = document
      .getElementById("spellList")
      .getElementsByTagName("tbody")[0];

    data.data.forEach((spell) => {
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
        spell.duration.concentration == true ? "✔" : "✖";

      durationCell.innerHTML = 
        spell.duration.type.toLowerCase() == "instant" || spell.duration.type.toLowerCase() == "permanent" || spell.duration.type.toLowerCase() == "special"
          ? `${spell.duration.type}`
          : `${spell.duration.time} ${spell.duration.type}`;

      timeCell.innerHTML = `${spell.time[0].number} ${spell.time[0].unit}`;

      rangeCell.innerHTML = spell.ranges.distance
        ? spell.ranges.distance.amount
          ? `${spell.ranges.distance.amount} ${spell.ranges.distance.type}`
          : spell.ranges.distance.type
        : spell.ranges.type;
      
    });
  } catch (error) {
    console.error("Error " + error);
  }
}

document.addEventListener("DOMContentLoaded", async function () {
      try {
        const data = await getAllSpells();
        populateTable(data);
      } catch (error) {
        console.error("Error:", error);
      }
    });

// window.onload =
// console.log(getData("http://127.0.0.1:8000/test"));
// populateTable(getData("http://127.0.0.1:8000/test"));


