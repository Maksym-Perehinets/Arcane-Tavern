import React from "react";
import { ITableValues } from "@/types";

interface TableProps {
  header: string[];
  value: ITableValues[];
}

const TableComponent: React.FC<TableProps> = ({ header, value }) => {
  
  return (
    <table className="w-full bg-black/25 border-2 border-black rounded text-[.8em]">
      <thead>
        <tr>
          {header.map((elem: string, key: number) => {
            return <th className="text-gray-400 font-semibold" key={key}>{elem}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {value.map((elem: ITableValues, rowIndex: number) => (
          <tr key={rowIndex} className="transition cursor-pointer text-gray-300 hover:text-white hover:bg-black/15">
            {Object.keys(elem).map((key: string, cellIndex: number) => {
              return <td className="font-medium" key={cellIndex}>{elem[key]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
