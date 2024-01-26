let filterList = [];

async function sendFilters(filters) {

  let level = filters[0];
  let caster_class = filters[1];
  let school = filters[2];
  let damage_type = filters[3];
  let range_distance = filters[4].split(" ")[1];
  let range_type = filters[4].split(" ")[0];
  let range_shape = filters[4].split(" ")[2];
  let duration_time = filters[5];
  let duration_type = filters[5];
  let casting_time = filters[6];
  let casting_type = filters[6];
  console.log(caster_class);

  res = await SortFilters(filters);
  ShowFiltered(res);
  
  // "range": {
  //   "type": "line",
  //   "distance": {
  //     "type": "feet",
  //     "amount": 100
  //   }
  // }
}

function collectFilters(){
    var elms = document.querySelectorAll("[id='actionDropdown']");
    for(var i = 0; i < elms.length; i++){ 
      filterList.push(elms[i].options[elms[i].selectedIndex].text.replace(/\(|\)/g, ""));
    }
    console.log(filterList);
    sendFilters(filterList);
    filterList = [];
}

function ShowFiltered(data) {
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
