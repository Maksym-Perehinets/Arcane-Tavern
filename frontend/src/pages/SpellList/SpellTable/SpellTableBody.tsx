import { Spell } from "@/interfaces/spell";
import SpellTableRow from "./SpellTableRow";

interface ListProps {
  spells: Spell[]; 
}

const SpellTableBody: React.FC<ListProps> = ({spells}) => {
  return (
    <tbody id="tableBody">
      
      {spells.map((spell: Spell) => {
        return(
          <SpellTableRow spell={spell}/>)
        }
      )}
      
    </tbody>
  )
}

export default SpellTableBody