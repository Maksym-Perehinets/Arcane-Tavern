var spellName,
  spellRange,
  spellDuration,
  spellCastingTim,
  spellComponents,
  spellDescriptio,
  spellLevel,
  spellBookName;

document.addEventListener("DOMContentLoaded", function () {
  var spellListTable = document.getElementById("spellList");
  var tbody = spellListTable.getElementsByTagName("tbody")[0];

  tbody.addEventListener("click", function (event) {
    handleTableRowClick(event);
  });
});

async function handleTableRowClick(event) {
  var clickedElement = event.target;
  var rowId = clickedElement.parentNode.cells[6].innerHTML;
  if (rowId) {
    let res = await SendCurrentSpell(rowId);
    insertInfoIntoDescription(res);
  } else {
    console.warn("Row ID not found.");
  }
}
//----------------------------------------------------------\
//    Доробіть так щоб кастери магії з'являлися в таблиці| О |
//----------------------------------------------------------/
function insertInfoIntoDescription(data) {
  var sdata = data.data[0];
  var bebra123 = sdata.duration;

  spellName = document.getElementById("spellName");
  spellRange = document.getElementById("spellRange");
  spellDuration = document.getElementById("spellDuration");
  spellCastingTime = document.getElementById("spellCastingTime");
  spellComponents = document.getElementById("spellComponents");
  spellDescription = document.getElementById("spellDescription");
  spellLevel = document.getElementById("spellLevel");
  spellBookName = document.getElementById("bookName");

  spellName.innerHTML = sdata.name;

  spellDuration.innerHTML =
    bebra123.type.toLowerCase() == "instant" ||
    bebra123.type.toLowerCase() == "permanent"
      ? `${bebra123.type}`
      : `${bebra123.time} ${bebra123.type}`;

  spellCastingTime.innerHTML = `${sdata.time[0].number} ${sdata.time[0].unit}`;

  spellRange.innerHTML = sdata.ranges.distance.amount
    ? `${sdata.ranges.distance.amount} ${sdata.ranges.distance.type}`
      : sdata.ranges.distance.type


  spellDescription.innerHTML = sdata.description;

  spellLevel.innerHTML = sdata.level;

  spellBookName.innerHTML = sdata.source;

  spellComponents.innerHTML = " "
  if (sdata.components.v) {
    spellComponents.innerHTML = "V";
  }

  if (sdata.components.s) {
    spellComponents.innerHTML += " S";
  }

  if (sdata.components.m) {
    spellComponents.innerHTML += sdata.components.m.text
      ? ` M - ${sdata.components.m.text}`
      : ` M - ${sdata.components.m}`;
  }
}

// async function loadData(){
//   try {
//     const data = await getSpellDescription();
//     console.log(data);
//     insertInfoIntoDescription(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
