import { useEffect, useState } from "react";
import { getAllSpells } from "@/queries/queries";

import SpellTableBody from "./SpellTable/SpellTableBody";
import SpellTableHead from "./SpellTable/SpellTableHead";
import { Spell } from "@/interfaces/spell";


const ListOfSpells = () => {

  const[spells, setSpells] = useState([])
  const[page, setPage] = useState(0)


  const handleScroll = () => {
    console.log("Height: ", window.innerHeight)
    console.log("Top: ", document.documentElement.scrollTop)
    console.log("Window: ", document.documentElement.scrollHeight)

    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
      setPage(prev => prev + 1)
    }
    
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllSpells(50, page);
      setSpells((prev: any[]) => { 
        return [...prev, ...data.data]
      });
    };
  
    fetchData();
  }, [page]); 

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="table-lines">
    <table id="spellList" className="custom-table">
      
      <SpellTableHead />
      <SpellTableBody spells={spells}/>
      

    </table>
  </div>
  )
}
export default ListOfSpells