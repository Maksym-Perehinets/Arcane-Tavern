import { useEffect, useRef } from "react";
import { useGetAllSpells } from "@/api/queries";

import SpellTable from "./SpellTable";
import SpellTableHead from "./SpellTableHead";

interface SpellTableProps {
  onRowClick: (id: string) => void;
}

const ListOfSpells: React.FC<SpellTableProps> = ({ onRowClick }) => {
  const tableRef = useRef<HTMLDivElement>(null);

  const {
    data,
    fetchNextPage,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
    hasNextPage,
  } = useGetAllSpells();

  useEffect(() => {
    const table = tableRef.current;
    table?.addEventListener("scroll", handleScroll);
  }, [data]);

  useEffect(() => {
    onRowClick(data?.pages[0][0].spell_url)
  }, [data?.pages[0]]);

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const handleScroll = () => {
    const table = tableRef.current;
    if (table) {
      if (table.scrollTop + table.clientHeight + 1 >= table.scrollHeight) {
        hasNextPage && fetchNextPage();
        
      }console.log(hasNextPage)
    }
  };

  return (
    <div
      className="table-lines text-gray-100 w-[90%] h-[85vh] bg-[rgba(12,_12,_12,_0.5)] bg-no-repeat bg-cover bg-spell-table border-[2px] border-[solid] border-[#424242] overflow-x-hidden rounded-[10px]"
      ref={tableRef}>
      <table className="font-[DraconicFont] top-24 w-full border-collapse outline-shadow grow-0 flex-shrink-0">
        <SpellTableHead />
        {data?.pages.map((page, index) => (
          <SpellTable key={index} spells={page} onRowClick={onRowClick} />
        ))}
      </table>
      <div className="flex justify-center">
        {(isFetchingNextPage) && <img src="/alchemyThing.gif" className="w-[10%] h-auto"/>}
      </div>
    </div>
  );
};
export default ListOfSpells;


