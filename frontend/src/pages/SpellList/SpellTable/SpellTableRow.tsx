import { Spell } from '@/interfaces/spell'

interface spellProp {
    spell: Spell; 
}
  
const SpellTableRow : React.FC<spellProp>= ({spell}) => {
  return (
    <tr key={spell.id}>
        <td>{spell.level}</td>
        <td>{spell.name}</td>
        <td>{spell.duration.concentration ? "✔" : "✖"}</td>
        <td>{spell.duration.type}</td>
        <td>{spell.time[0].number + " " + spell.time[0].unit}</td>
        <td>{spell.ranges.distance 
            ? (spell.ranges.distance.amount 
                ? spell.ranges.distance.amount + " " + spell.ranges.distance.type 
                : spell.ranges.distance.type) 
            : spell.ranges.type}
        </td>
    </tr>
  )
}

export default SpellTableRow