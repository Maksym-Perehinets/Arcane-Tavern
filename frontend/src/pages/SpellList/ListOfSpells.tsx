import { useEffect, useRef, useState } from "react";
import { getAllSpells } from "@/queries/queries";

import { SpellMainStats } from "@/interfaces/spell";
import SpellTable from "./SpellTable";

interface SpellTableProps {
  onRowClick: (id: number) => void;
}

const ListOfSpells: React.FC<SpellTableProps> = ({ onRowClick }) => {

  const [spells, setSpells] = useState<SpellMainStats[]>([])
  const [page, setPage] = useState(0)
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
    <div
      className="table-lines text-gray-100 w-[90%] h-[85vh] bg-[rgb(12,12,12)] bg-no-repeat bg-cover border-[2px] border-[solid] border-[#424242] overflow-x-hidden rounded-[10px]" 
      ref={tableRef}>
        
      <SpellTable spells={spells} onRowClick={onRowClick} />

    </div>
  )
}
export default ListOfSpells