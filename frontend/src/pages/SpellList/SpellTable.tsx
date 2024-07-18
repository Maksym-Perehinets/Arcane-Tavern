import { spellsTableElem } from "@/constants"
import { SpellMainStats } from "@/interfaces/spell";
import { sortTableData } from "@/queries/queries";
import { ITableElem } from "@/types";
import { useState } from "react";

interface ListProps {
    spells: SpellMainStats[];
    onRowClick: (id: number) => void;

}

const SpellTable: React.FC<ListProps> = ({ spells, onRowClick }) => {

    const [asc, setAsc] = useState(true)

    const sortTable = async (filterName: string) => {
        const res = sortTableData(filterName, asc)
        setAsc(!asc)
        console.log(res)
    }

    const getSpellProperties = (spell: SpellMainStats) => [
        spell.level,
        spell.name,
        spell.duration.concentration ? "✔" : "✖",
        spell.duration.type,
        `${spell.time[0].number} ${spell.time[0].unit}`,
        spell.ranges.distance
            ? spell.ranges.distance.amount
                ? `${spell.ranges.distance.amount} ${spell.ranges.distance.type}`
                : spell.ranges.distance.type
            : spell.ranges.type,
    ];


    return (
        <table id="spellList" className="custom-table outline-shadow">
            <thead>
                <tr>
                    {spellsTableElem.map((link: ITableElem) => (
                        <th
                            key={link.id}
                            onClick={() => { sortTable(link.id) }}>
                            {link.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody id="tableBody" className="snap-mandatory snap-y">
                {spells.map((spell: SpellMainStats) => (
                    <tr key={spell.id} onClick={() => onRowClick(spell.id)} className="snap-start h-60 border-rose-700 border-2    ">
                        {getSpellProperties(spell).map((property, index) => (
                            <td key={index}>{property}</td>
                        ))}
                    </tr>
                ))}
            </tbody>

        </table>
    )
}

export default SpellTable