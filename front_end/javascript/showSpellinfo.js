var spellName, spellRange, spellDuration, spellCastingTim, spellComponents, spellDescriptio, spellLevel;

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

function pizdaHui1234(data) {
  var sdata = data.spell[0];
  var bebra123 = sdata.duration[0];

  spellName = document.getElementById("spellName");
  spellRange = document.getElementById("spellRange");
  spellDuration = document.getElementById("spellDuration");
  spellCastingTime = document.getElementById("spellCastingTime");
  spellComponents = document.getElementById("spellComponents");
  spellDescription = document.getElementById("spellDescription");
  spellLevel = document.getElementById("spellLevel");

  console.log(sdata);
  spellName.innerHTML = sdata.name;
  console.log(spellName.innerHTML);
  spellDuration.innerHTML =
    bebra123.type == "timed"
      ? `${bebra123.duration.type} ${bebra123.duration.amount}`
      : `${bebra123.type}`;

  spellCastingTime.innerHTML = `${sdata.time[0].number} ${sdata.time[0].unit}`;

  spellRange.innerHTML = sdata.range.distance
    ? sdata.range.distance.amount
      ? `${sdata.range.distance.amount} ${sdata.range.distance.type}`
      : sdata.range.distance.type
    : sdata.range.type;

  spellDescription.innerHTML = sdata.entries;

  spellComponents.innerHTML = sdata.components;

  spellLevel.innerHTML = sdata.level;
}

const backendUrlUpload = "http://localhost:8000/returnSpellsToTable/";
document.addEventListener("DOMContentLoaded", async function () {
  try {
    const data = await getSpellDescription();
    pizdaHui1234(data);
  } catch (error) {
    console.error("Error:", error);
  }
});
