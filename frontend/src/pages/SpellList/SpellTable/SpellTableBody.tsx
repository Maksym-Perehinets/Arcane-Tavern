import { SpellMainStats } from "@/interfaces/spell";
import SpellTableRow from "./SpellTableRow";

interface ListProps {
  spells: SpellMainStats[];
  onRowClick: (id: number) => void;
}

const SpellTableBody: React.FC<ListProps> = ({ spells, onRowClick }) => {
  return (
    <tbody id="tableBody">
      {spells.map((spell: SpellMainStats) => (
        <SpellTableRow key={spell.id} spell={spell} onRowClick={onRowClick} />
      ))}
    </tbody>
  );
};

export default SpellTableBody;
