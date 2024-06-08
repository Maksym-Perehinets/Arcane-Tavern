import { useEffect } from "react";
import { insertData } from "../../components/scripts_tmp/InsertData";
import { getAllSpells } from "../../queries/queries";
import { spellsTableElem } from "../../constants"
import { ITableElem } from "../../types";
import SpellDescription from "../../components/shared/SpellDescription";

const SpellList = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllSpells();
        console.log("Received data:", data);
  
        if (data && data.data && Array.isArray(data.data)) {
          insertData(data, false);

        } else {
          console.error("Invalid data object received:", data);
        }
      } catch (error) {
        throw error;
      }
    };
  
    fetchData();
  }, []); 
  

  return (
    <>
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
    <SpellDescription />
    </>
  );
};

export default SpellList;
