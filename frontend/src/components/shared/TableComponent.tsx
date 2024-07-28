// TableComponent.tsx
import React, { useState } from "react";
import { ITableValues } from "@/types";
import AdditionalDetails from "./AdditionalDetails";
import { IAdditionalDetailsTable } from "@/types";

interface TableProps {
  header: string[];
  value: ITableValues[];
  details: { utilType: string; details: IAdditionalDetailsTable[] }[];
}

const TableComponent: React.FC<TableProps> = ({ header, value, details }) => {
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
          {value.map((elem: ITableValues, rowIndex: number) => (
            <tr
              key={rowIndex}
              className="transition cursor-pointer text-gray-300 hover:text-white hover:bg-black/15"
              onClick={() => handleCellClick(rowIndex)}
            >
              {Object.keys(elem).map((key: string, cellIndex: number) => (
                <td className="font-medium" key={cellIndex}>
                  {elem[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {showDetails !== null && (
        <div className="details-modal">
          <AdditionalDetails tableData={[details[showDetails]]} />
        </div>
      )}
    </div>
  );
};

export default TableComponent;
