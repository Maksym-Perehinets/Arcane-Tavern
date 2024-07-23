import { spellsTableElem } from "@/constants";
import { SpellMainStats } from "@/interfaces/spell";
import { sortTableData } from "@/queries/queries";
import { ITableElem } from "@/types";
import { useState } from "react";

interface ListProps {
    spells: SpellMainStats[];
    onRowClick: (id: number) => void;
}

const SpellTable: React.FC<ListProps> = ({ spells, onRowClick }) => {
    const [asc, setAsc] = useState(true);

    const sortTable = async (filterName: string) => {
        const res = sortTableData(filterName, asc);
        setAsc(!asc);
        console.log(res);
    };

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
        <table
            id="spellList"
            className="font-[DraconicFont] top-24 w-full border-collapse outline-shadow "
        >
            <thead>
                <tr>
                    {spellsTableElem.map((link: ITableElem) => (
                        <th
                            key={link.id}
                            onClick={() => {
                                sortTable(link.id);
                            }}
                            className="bg-zinc-950 sticky top-0 text-white h-10 p-2 text-xl cursor-pointer"
                        >
                            {link.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody id="tableBody" className="snap-mandatory snap-y bg-spell-table">
                {spells.map((spell: SpellMainStats) => (
                    <tr
                        key={spell.id}
                        onClick={() => onRowClick(spell.id)}
                        className="snap-start pt-3 hover:bg-violet-700 cursor-pointer p-1 text-gray-200 hover:[transition:0.3s]" 
                    >
                        {getSpellProperties(spell).map((property, index) => (
                            <td key={index} className="text-center text-xl m-96">
                                {property}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SpellTable;
