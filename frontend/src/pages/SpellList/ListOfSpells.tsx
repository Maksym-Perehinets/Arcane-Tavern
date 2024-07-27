import { useEffect, useRef, useState } from "react";
import { getAllSpells, getSpellById } from "@/api";
import useGetAllSpells from "@/hooks/useGetAllSpells"

// import SpellTableBody from "./SpellTable/SpellTableBody";
// import SpellTableHead from "./SpellTable/SpellTableHead";
import { SpellMainStats } from "@/interfaces/spell";
import SpellTable from "./SpellTable";

interface SpellTableProps {
  onRowClick: (id: number) => void;
}

const ListOfSpells: React.FC<SpellTableProps> = ({ onRowClick }) => {

  const [spells, setSpells] = useState<SpellMainStats[]>([])
  const [page, setPage] = useState(0)
  const tableRef = useRef<HTMLDivElement>(null)


  const { isLoading, data, isError, error } = useGetAllSpells(1, 50)

  if (isLoading) {
    return <span>Loading...</span>
  }
  if (isError) {
    return <span>Error: {error.message}</span>
  }
  // const handleScroll = () => {
  //   const table = tableRef.current;
  //   if (table) {
  //     if (table.scrollTop + table.clientHeight + 1 >= table.scrollHeight)
  //       setPage((prev) => prev + 1);
  //   }
  // }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { isError, data, error  } = await useGetAllSpells(page + 1, 50)
  //     setSpells((prev: any[]) => {
  //       return [...prev, ...data.]
  //     });
  //   };

  //   fetchData();
  // }, [page]);

  // useEffect(() => {
  //   const table = tableRef.current;
  //   if (table)
  //     table.addEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div
      className="table-lines text-gray-100 w-[90%] h-[85vh] bg-[rgba(12,_12,_12,_0.5)] bg-no-repeat bg-cover border-[2px] border-[solid] border-[#424242] overflow-x-hidden rounded-[10px]" 
      ref={tableRef}
    >
      <SpellTable spells={data?.data} onRowClick={onRowClick} />

    </div>
  )
}
export default ListOfSpells