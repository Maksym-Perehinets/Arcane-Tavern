var spellName =  document.getElementById("spellName");
var spellRange =  document.getElementById("spellRange");
var spellDuration =  document.getElementById("spellDuration");
var spellCastingTime =  document.getElementById("spellCastingTime");
var spellComponents =  document.getElementById("spellComponents");
var spellDescription =  document.getElementById("spellDescription");


function hui(){
    var spellTable = document.getElementById("spellList").getElementsByTagName('tbody')[0];
    for (var i = 0; i < spellTable.rows.length; i++) {
        spellTable.rows[i].onclick = function() {
            console.log(SendData({"name": this.id}));
        };
    }
}