import { spellsTableElem } from "../../constants"
import { ITableElem } from "../../types";

export default function ListOfSpells() {
  return (
    <div className="table-lines">
    <table id="spellList" className="custom-table">
      
      <thead>
        <tr>
          {spellsTableElem.map((link: ITableElem) => {
            return (
              <th>
                <a id={link.id}>
                  {link.label}
                </a>
              </th>
            )
          })}
        </tr>
      </thead>

      <tbody id="tableBody"></tbody>

    </table>
  </div>
  )
}
