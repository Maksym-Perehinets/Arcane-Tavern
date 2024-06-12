import { SpellMainStats } from "@/interfaces/spell";
import SpellTableRow from "./SpellTableRow";

interface ListProps {
  spells: SpellMainStats[]; 
}

const SpellTableBody: React.FC<ListProps> = ({spells}) => {
  return (
    <tbody id="tableBody">
      
      {spells.map((spell: SpellMainStats) => {
        return(
          <SpellTableRow key={spell.id} spell={spell}/>)
        }
      )}
      
    </tbody>
  )
}

export default SpellTableBody