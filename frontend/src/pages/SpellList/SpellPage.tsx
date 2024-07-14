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
    <>
      <ListOfSpells onRowClick={handleRowClick} />
      <SpellDescription spellId={selectedSpellId}/>
    </>
  );
};

export default SpellList;