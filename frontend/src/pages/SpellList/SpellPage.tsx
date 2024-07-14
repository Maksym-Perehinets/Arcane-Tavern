import SpellDescription from "./SpellDescription";
import "@/css/SpellPageCSS/SpellTable.scss"
import ListOfSpells from "./ListOfSpells";


const SpellList = () => {
  
  //const {data, isLoading, error, isError} = 

  return (
    <>
      <ListOfSpells />
      <SpellDescription spellId={10}/>
    </>
  );
};

export default SpellList;