import React, { useState } from "react";
import { IAdditionalDetailsTable, CombatArmor, CombatWeapons, ProficiencySkills, ProficiencyTools } from "@/types";
import AdditionalDetails from "./AdditionalDetails";

// Union type for table rows
type TableRow = CombatArmor | CombatWeapons | ProficiencySkills | ProficiencyTools;

interface MyTableProps {
    header: string[];
    value: TableRow[];
    details?: { utilType: string; details: IAdditionalDetailsTable[] }[];
}

const TableComponent: React.FC<MyTableProps> = ({ header, value, details }) => {
    const [showDetails, setShowDetails] = useState<number | null>(null);

    const handleCellClick = (rowIndex: number) => {
        setShowDetails((prevIndex) => (prevIndex === rowIndex ? null : rowIndex));
    };

    return (
        <div>
            <table className="w-full bg-black/25 border-2 border-black rounded text-[.8em]">
                <thead>
                    <tr>
                        {header.map((elem: string, key: number) => (
                            <th className="text-gray-400 font-semibold" key={key}>{elem}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {value.map((elem: TableRow, rowIndex: number) => (
                        <tr
                            key={rowIndex}
                            className="transition cursor-pointer text-gray-300 hover:text-white hover:bg-black/15"
                            onClick={() => handleCellClick(rowIndex)}
                        >
                            {Object.keys(elem).map((key: string, cellIndex: number) => (
                                <td className="font-medium" key={cellIndex}>
                                    {String((elem as any)[key])}  {/* Cast to any and convert to string */}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {showDetails !== null && details && (
                <div className="details-modal">
                    <AdditionalDetails tableData={[details[showDetails]]} />
                </div>
            )}
        </div>
    );
};

export default TableComponent;
