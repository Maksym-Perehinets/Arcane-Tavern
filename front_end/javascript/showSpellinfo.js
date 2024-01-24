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
