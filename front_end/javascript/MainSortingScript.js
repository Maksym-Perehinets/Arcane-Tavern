var spellName,
  spellRange,
  spellDuration,
  spellCastingTime,
  spellConcentration,
  spellLevel;

let checkDesc = true;
let secondTimeClickedName = " ";

document.addEventListener("DOMContentLoaded", function () {
  console.log("qwery");
  var spellListTable = document.getElementById("spellList");
  var thead = spellListTable.getElementsByTagName("thead")[0];

  thead.addEventListener("click", (event) => {
    sortTable(event.target.id);
  });
});

async function sortTable(name) {
  checkDesc = secondTimeClickedName == name ? !checkDesc : true;
  secondTimeClickedName = name;
  let response = await SortTableData(name, checkDesc);
  replaceTableData(response);
}

function replaceTableData(newData) {
  var spellListTable = document
    .getElementById("spellList")
    .getElementsByTagName("tbody")[0];


  newData.data.forEach((spell, index) => {
    row = spellListTable.rows[index];
    idCell.style.display = "none";

    idCell.innerHTML = spell.id;
    levelCell.innerHTML = spell.level;
    nameCell.innerHTML = spell.name;

    concentration.innerHTML = spell.duration.concentration == true ? "✔" : "✖";

    durationCell.innerHTML =
      spell.duration.type.toLowerCase() == "instant" ||
      spell.duration.type.toLowerCase() == "permanent" ||
      spell.duration.type.toLowerCase() == "special"
        ? `${spell.duration.type}`
        : `${spell.duration.time} ${spell.duration.type}`;

    timeCell.innerHTML = `${spell.time[0].number} ${spell.time[0].unit}`;

    rangeCell.innerHTML = spell.ranges.distance
      ? spell.ranges.distance.amount
        ? `${spell.ranges.distance.amount} ${spell.ranges.distance.type}`
        : spell.ranges.distance.type
      : spell.ranges.type;
  });
}
