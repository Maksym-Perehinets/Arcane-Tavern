import SpellDescription from "./SpellDescription";
import "@/css/SpellPageCSS/SpellTable.scss"
import ListOfSpells from "./ListOfSpells";
import { useState } from "react";
import FilterWindow from "./FilterWindow";


const SpellList = () => {

  //const {data, isLoading, error, isError} = 
  const [selectedSpellId, setSelectedSpellId] = useState(1);

  const handleRowClick = (id: number) => {
    setSelectedSpellId(id);
  };

  return (
    <div className="mt-[90px] flex flex-row">
      <FilterWindow />

      <div className="flex justify-between pr-20 px-5">
        <ListOfSpells onRowClick={handleRowClick} />
        <SpellDescription spellId={selectedSpellId} />
      </div>
    </div>
  );
};

export default SpellList;