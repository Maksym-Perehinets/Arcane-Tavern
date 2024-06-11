import { useEffect, useState } from "react";
import { insertData } from "./InsertData";
import { getAllSpells } from "@/queries/queries";

import SpellDescription from "./SpellDescription";
import "@/css/SpellPageCSS/SpellTable.scss"
import ListOfSpells from "./ListOfSpells";


const SpellList = () => {

  const[spells, setSpells] = useState([])
  const[page, setPage] = useState(0)


  const handleScroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
      
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllSpells(40, page);
        console.log("Received data:", data);
  
        if (data && data.data && Array.isArray(data.data)) {
          setSpells(data)
          //insertData(data, false);

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
    <ListOfSpells spellArray={spells} />
    <SpellDescription />
    </>
  );
};

export default SpellList;
