import SpellDescription from "./SpellDescription";
import "@/css/SpellPageCSS/SpellTable.scss"
import ListOfSpells from "./ListOfSpells";
import { useState } from "react";


const SpellList = () => {
  
  //const {data, isLoading, error, isError} = 
  const [selectedSpellId, setSelectedSpellId] = useState(1);

  const handleRowClick = (id: number) => {
    setSelectedSpellId(id);
  };

  return (
    <div className="flex justify-around mt-[90px]"> 
      <ListOfSpells onRowClick={handleRowClick} />
      <SpellDescription spellId={selectedSpellId}/>
    </div>
  );
};

export default SpellList;