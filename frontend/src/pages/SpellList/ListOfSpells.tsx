import { useEffect, useRef, useState } from "react";
import { getAllSpells, getSpellById } from "@/queries/queries";

import SpellTableBody from "./SpellTable/SpellTableBody";
import SpellTableHead from "./SpellTable/SpellTableHead";
import { SpellMainStats } from "@/interfaces/spell";

interface SpellTableProps {
  onRowClick: (id: number) => void;
}

const ListOfSpells:React.FC<SpellTableProps> = ({ onRowClick }) => {

  const[spells, setSpells] = useState<SpellMainStats[]>([])
  const[page, setPage] = useState(0)
  const tableRef = useRef<HTMLDivElement>(null)


  const handleScroll = () => {
      const table = tableRef.current;
      if (table) {
        if (table.scrollTop + table.clientHeight + 1 >= table.scrollHeight) 
          setPage((prev) => prev + 1);
      }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllSpells(50, page)
      setSpells((prev: any[]) => { 
        return [...prev, ...data.data]
      });
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
      <SpellTableBody spells={spells} onRowClick={onRowClick} />

    </table>

  </div>
  )
}
export default ListOfSpells