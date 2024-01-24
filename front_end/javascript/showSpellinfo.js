var spellName = document.getElementById("spellName");
var spellRange = document.getElementById("spellRange");
var spellDuration = document.getElementById("spellDuration");
var spellCastingTime = document.getElementById("spellCastingTime");
var spellComponents = document.getElementById("spellComponents");
var spellDescription = document.getElementById("spellDescription");
const backendUrlUpload = "http://localhost:8000/returnSpellsToTable/";

function ClickChecking() {
  var spellTable = document
    .getElementById("spellList")
    .getElementsByTagName("tbody")[0];
  for (var i = 0; i < spellTable.rows.length; i++) {
    spellTable.rows[i].onclick = function () {
      SendData({ name: this.cells[6].innerHTML }, backendUrlUpload);
    };
  }
}

function pizdaHui1234 (sdata) {
  // spellName.innerHTML = sdata.name;
  // spellRange.innerHTML = sdata.range;
  // spellDuration.innerHTML = sdata.duration;
  // spellCastingTime.innerHTML = sdata.castingTime;
  // spellComponents.innerHTML = sdata.components;
  // spellDescription.innerHTML = sdata.description;

  // levelCell.innerHTML = spell.level;
        spellName.innerHTML = sdata.name;


        spellDuration.innerHTML =
          sdata.duration.type == "timed"
            ? `${sdata.duration.duration.type} ${sdata.duration.duration.amount}`
            : `${sdata.duration.type}`;

            spellCastingTime.innerHTML = `${sdata.time[0].number} ${sdata.time[0].unit}`;

            spellRange.innerHTML = sdata.range.distance
          ? sdata.range.distance.amount
            ? `${sdata.range.distance.amount} ${sdata.range.distance.type}`
            : sdata.range.distance.type
          : sdata.range.type;


  

}
document.addEventListener('DOMContentLoaded', async function() {

pizdaHui1234(getData("http://127.0.0.1:8000/test"));
});

