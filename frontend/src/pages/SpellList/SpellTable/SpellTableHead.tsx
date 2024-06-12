import { spellsTableElem } from "@/constants"
import { sortTableData } from "@/queries/queries";
import { ITableElem } from "@/types";
import { useState } from "react";

export default function SpellTableHead() {

  const [asc, setAsc] = useState(true)

  const sortTable = async (filterName: string) => {
    const res = sortTableData(filterName, asc)
    setAsc(!asc)
    console.log(res)
  }

  return (
    <thead>
        <tr>
          {spellsTableElem.map((link: ITableElem) => {
            return (
              <th 
                key={link.id} 
                onClick={() => {sortTable(link.id)}}>
                  {link.label}
              </th>
            )
          })}
        </tr>
      </thead>
  )
}
