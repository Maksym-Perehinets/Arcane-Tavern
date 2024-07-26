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
            return <th key={key}>{elem}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {value.map((elem: ITableValues, rowIndex: number) => (
          <tr key={rowIndex}>
            {Object.keys(elem).map((key: string, cellIndex: number) => {
              return <td key={cellIndex}>{elem[key]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
