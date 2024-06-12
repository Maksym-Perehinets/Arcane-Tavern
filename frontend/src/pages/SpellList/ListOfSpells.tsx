import { useEffect, useRef, useState } from "react";
import { getAllSpells } from "@/queries/queries";

import SpellTableBody from "./SpellTable/SpellTableBody";
import SpellTableHead from "./SpellTable/SpellTableHead";
import { Spell } from "@/interfaces/spell";


const ListOfSpells = () => {

  const[spells, setSpells] = useState<Spell[]>([])
  const[page, setPage] = useState(0)
  const tableRef = useRef<HTMLDivElement>(null);


  const handleScroll = () => {
    // console.log("Height: ", window.innerHeight)
    // console.log("Top: ", document.documentElement.scrollTop)
    // console.log("Window: ", document.documentElement.scrollHeight)

      const table = tableRef.current;
      if (table) {
        if (table.scrollTop + table.clientHeight + 1 >= table.scrollHeight) {
          setPage((prev) => prev + 1);
        }
      }
    
    
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllSpells(50, page);
      setSpells((prev: any[]) => { 
        return [...prev, ...data.data]
      });
      console.log("spells", spells.length)

      // console.log(data)
    };
  
    fetchData();
  }, [page]); 

  useEffect(() => {
    const table = tableRef.current;
    if (table)
      table.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="table-lines" ref={tableRef}>
    <table id="spellList" className="custom-table">
      <SpellTableHead />
      <SpellTableBody spells={spells}/>
      

    </table>

  </div>
  )
}
export default ListOfSpells