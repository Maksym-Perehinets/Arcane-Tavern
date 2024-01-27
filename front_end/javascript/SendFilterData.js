let filterList = [];

async function sendFilters(filters) {
  res = await SortFilters(filters);
  ShowFiltered(res);
}

function collectFilters(){
    var elms = document.querySelectorAll("[id='actionDropdown']");
    var filters = ""
    for(var i = 0; i < elms.length; i++){ 
      filters += elms[i].value;
    }
    sendFilters(filters);
    filterList = [];
}

function ShowFiltered(data) {
  console.log(data.data);
  var spellListTable = document
    .getElementById("spellList")
    .getElementsByTagName("tbody")[0];
    console.log(spellListTable);
    spellListTable.innerHTML = ""

  data.data.forEach((spell) => {
    console.log(spell);
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
