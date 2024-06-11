import SpellTableBody from "./SpellTable/SpellTableBody";
import SpellTableHead from "./SpellTable/SpellTableHead";


export default function ListOfSpells(spellArray: unknown) {
  return (
    <div className="table-lines">
    <table id="spellList" className="custom-table">
      
      <SpellTableHead />
      <SpellTableBody />
      

    </table>
  </div>
  )
}
