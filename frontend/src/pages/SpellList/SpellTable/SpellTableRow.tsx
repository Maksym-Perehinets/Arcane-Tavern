import { SpellMainStats } from '@/interfaces/spell';

interface SpellProp {
  spell: SpellMainStats;
  onRowClick: (id: number) => void;
}

const SpellTableRow: React.FC<SpellProp> = ({ spell, onRowClick }) => {
  const handleClick = () => {
    onRowClick(spell.id);
  };

  return (
    <tr onClick={handleClick}>
      <td className='row'>{spell.level}</td>
      <td className='row'>{spell.name}</td>
      <td className='row'>{spell.duration.concentration ? "✔" : "✖"}</td>
      <td className='row'>{spell.duration.type}</td>
      <td className='row'>{spell.time[0].number + " " + spell.time[0].unit}</td>
      <td className='row'>
        {spell.ranges.distance
          ? spell.ranges.distance.amount
            ? spell.ranges.distance.amount + " " + spell.ranges.distance.type
            : spell.ranges.distance.type
          : spell.ranges.type}
      </td>
    </tr>
  );
};

export default SpellTableRow;
