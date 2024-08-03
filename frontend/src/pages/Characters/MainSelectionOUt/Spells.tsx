import TableComponent from "@/components/shared/TableComponent"
import { CharactersPageSpellsTables } from "@/constants"
import { CharactersPageSpellsSpellsHeaders } from "@/constants"
import { CharactersPageSpellsCantrips, CharactersPageSpells1lvl, CharactersPageSpells2lvl } from "@/constants"
import { CharactersPageSlots } from "@/constants"
import { ICharacterPageSpellsSlots } from "@/types"
const Spells = () => {

  const CharactersPgeSpellsTablesValues = [CharactersPageSpellsCantrips, CharactersPageSpells1lvl, CharactersPageSpells2lvl];

  return (
    <div className="w-[81%] ml-[10%] mt-[4em]">
      <div className="selection-div w-full ">
       
        <p className="text-left text-[1.5em] w-full">Slots</p>
        <div className="block w-full">
          {CharactersPageSlots.map((elem: ICharacterPageSpellsSlots, index: number) => {
            return (
              <div key={index}>
                  {Object.keys(elem).map((key: string, cellIndex: number) => (
                      <div className="font-medium inline-block mx-[1.5%] float-left" key={cellIndex}>
                          <p className="block w-full">{key}</p>
                          <p 
                          className="text-[1.8em] text-gray-300 hover:text-white transition font-bold cursor-pointer">
                            {String((elem as any)[key])}</p>
                      </div>
                  ))}
              </div>
            );
            })}

        </div>
        {CharactersPageSpellsTables.map((table: string, index: number) => {
          return <div key={table}> 
            <p className="text-left text-[1.5em] w-full mt-6 mb-2 block float-left">{table}</p>
            <TableComponent
             value={CharactersPgeSpellsTablesValues[index]} 
             header={CharactersPageSpellsSpellsHeaders} 
             details={undefined} />
          </div>
        })}


      </div>
    </div>
  )
}

export default Spells