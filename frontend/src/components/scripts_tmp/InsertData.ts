import { Spell } from "../../interfaces/spell";

export function insertData(data: { data: Spell[] } | any, clear: boolean): void {
    const spellListTable = document.getElementById("spellList") as HTMLTableElement;
    if (spellListTable) {
      const tbody = spellListTable.getElementsByTagName("tbody")[0];
      if (tbody) {
        if (clear) {
          tbody.innerHTML = ""; // Clear existing table rows
        }
  
        if (Array.isArray(data.data)) {
          data.data.forEach((spell: Spell) => {
            const row = spellListTable.insertRow();

            const levelCell = row.insertCell(0);
            levelCell.textContent = spell.level.toString();
        
            const nameCell = row.insertCell(1);
            nameCell.textContent = spell.name;

            const concentrationCell = row.insertCell(2);
            concentrationCell.textContent = spell.duration.concentration ? "✔" : "✖";
        
            const durationCell = row.insertCell(3);
            durationCell.textContent = spell.duration.type;
        
            const timeCell = row.insertCell(4);
            timeCell.textContent = spell.time[0].number + " " + spell.time[0].unit;
        
            const rangeCell = row.insertCell(5);
            rangeCell.textContent = spell.ranges.distance ? (spell.ranges.distance.amount ? spell.ranges.distance.amount + " " + spell.ranges.distance.type : spell.ranges.distance.type) : spell.ranges.type;
          });   } else {
            console.error("Invalid data format:", data);
          }
        }}}


        