import { useEffect, useRef, useState } from "react";
import { useGetAllSpells } from "@/api/queries"

import { SpellMainStats } from "@/interfaces/spell";
import SpellTable from "./SpellTable";
import SpellTableHead from "./SpellTableHead";

interface SpellTableProps {
  onRowClick: (id: string) => void;
}

const ListOfSpells: React.FC<SpellTableProps> = ({ onRowClick }) => {

  const [spells, setSpells] = useState<SpellMainStats[]>([])
  const [page, setPage] = useState(0)
  const tableRef = useRef<HTMLDivElement>(null)

  
  const { data, fetchNextPage, isLoading, isError, error, isFetchingNextPage } = useGetAllSpells(1, 50)
  console.log(data?.pages)
  // setSpells(data?.pages.map((page) => page.result))


  useEffect(() => {
    const table = tableRef.current
    console.log(table)
    table?.addEventListener("scroll", handleScroll);
  }, [data]);


  if (isLoading) {
    return <span>Loading...</span>
  }
  if (isError) {
    return <span>Error: {error.message}</span>
  }


  const handleScroll = () => {
    const table = tableRef.current;
    if (table) {
      if (table.scrollTop + table.clientHeight + 1 >= table.scrollHeight)
        fetchNextPage()
    }
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { isError, data, error  } = await useGetAllSpells(page + 1, 50)
  //     setSpells((prev: any[]) => {
  //       return [...prev, ...data?.pages[0]]
  //     });
  //   };

  //   fetchData();
  // }, [page]);


  // tableRef.current?.addEventListener("scroll", handleScroll);
  return (
    <div
      className="table-lines text-gray-100 w-[90%] h-[85vh] bg-[rgba(12,_12,_12,_0.5)] bg-no-repeat bg-cover border-[2px] border-[solid] border-[#424242] overflow-x-hidden rounded-[10px]" 
      ref={tableRef}
    >
       <table
            className="font-[DraconicFont] top-24 w-full border-collapse outline-shadow grow-0 flex-shrink-0"
        >
          <SpellTableHead />
          {data?.pages.map((page, index) =>  
          
          <SpellTable key={index} spells={page} onRowClick={onRowClick} />
        )}      
      </table>
      {isFetchingNextPage && <p>Loading</p>}
    </div>
  )
}
export default ListOfSpells