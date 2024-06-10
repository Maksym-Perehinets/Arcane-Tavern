import { useEffect } from "react";
import { insertData } from "../../components/scripts_tmp/InsertData";
import { getAllSpells } from "../../queries/queries";

import SpellDescription from "./SpellDescription";
import "../../css/SpellPageCSS/SpellTable.scss"
import ListOfSpells from "./ListOfSpells";


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
    <ListOfSpells />
    <SpellDescription />

{/* <SpellTable /> */}



    </>
  );
};

export default SpellList;
