import { spellsTableElem } from "@/constants"
import { ITableElem } from "@/types";

export default function SpellTableHead() {
  return (
    <thead>
        <tr>
          {spellsTableElem.map((link: ITableElem) => {
            return (
              <th key={link.id}>
                  {link.label}
              </th>
            )
          })}
        </tr>
      </thead>
  )
}
