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
    <div className="bg-test-spell-page h-screen absolute bg-cover">
      <div className="mt-[90px] grid grid-cols-[0.3fr_1.8fr_1.4fr] grid-rows-[43%_54%] rows-1 ">
        <FilterWindow />

        {/* <div className="flex justify-between pr-20 px-5"> */}
          <ListOfSpells onRowClick={handleRowClick} />
          <SpellDescription spellId={selectedSpellId} />
        </div>
      {/* </div> */}
    </div>
  );
};

export default SpellList;