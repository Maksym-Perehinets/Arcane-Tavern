import { useEffect } from "react";
import { insertData } from "../../components/scripts_tmp/InsertData";
import { getAllSpells } from "../../queries/queries";

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
    <div className="table-lines">
      <table id="spellList" className="custom-table">
        <thead>
          <tr>
            <th>
              <a id="lvl">Lvl</a>
            </th>
            <th>
              <a id="name">Name</a>
            </th>
            <th>
              <a id="concentration">C</a>
            </th>
            <th>
              <a id="duration">Duration</a>
            </th>
            <th>
              <a id="time">Time</a>
            </th>
            <th>
              <a id="range">Range</a>
            </th>
          </tr>
        </thead>
        <tbody id="tableBody"></tbody>
      </table>
    </div>
  );
};

export default SpellList;
