import SpellDescription from "./SpellDescription";
import ListOfSpells from "./ListOfSpells";
import { useEffect, useState } from "react";
import FilterWindow from "./FilterWindow";


const SpellList = () => {

  //const {data, isLoading, error, isError} = 
  const [selectedSpellId, setSelectedSpellId] = useState<string>("");

  const handleRowClick = (id: string) => {
    setSelectedSpellId(id);
  };


  return (
    <div className="bg-test-spell-page h-screen bg-cover">
      <div className="pt-[90px] flex">

          <FilterWindow />


        <div className="px-5 w-[100vh] grow">
          <ListOfSpells onRowClick={handleRowClick} />
        </div>

        <div className="spell-details h-[85vh] pr-1/4 flex flex-col mr-24">
            <SpellDescription spellId={selectedSpellId } />
        </div>
      </div>
    </div>
  );
};

export default SpellList;