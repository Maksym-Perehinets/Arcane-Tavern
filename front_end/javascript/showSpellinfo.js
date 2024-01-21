var spellName =  document.getElementById("spellName");
var spellRange =  document.getElementById("spellRange");
var spellDuration =  document.getElementById("spellDuration");
var spellCastingTime =  document.getElementById("spellCastingTime");
var spellComponents =  document.getElementById("spellComponents");
var spellDescription =  document.getElementById("spellDescription");

function displaySpell(){
};
  
function ultratestqwerty(){
    var spellTable =  document.getElementById("spellList").getElementsByTagName('tbody')[0];
    spellTable.addEventListener("click", displaySpell);
}

