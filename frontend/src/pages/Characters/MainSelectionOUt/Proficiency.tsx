import TableComponent from "@/components/shared/TableComponent"
import { CharactersProficiencyTableValuesSkills, CharactersProficiencyTableValuesTools } from "@/constants"
import { CharactersProficiencyTableSkillsHeaders, CharactersProficiencyTableHeadersTools } from "@/constants"

const weaponProfs = ["simple", "martial"]
const armorProfs = ["light", "medium", "shields"]
const languagesProfs = ["Draconic", "Common"]

const Proficiency = () => {
  return (
    <>
    <div className="selection-div ml-[10%] mt-8 text-left w-[81%] h-auto">
      <p className="text-[1.8em] mt-1 ml-[0%] mb-2">Skills</p>
        <TableComponent
        value={CharactersProficiencyTableValuesSkills} 
        header={CharactersProficiencyTableSkillsHeaders} 
        details={undefined}/> 
      <p className="text-[1.8em] mt-4 ml-[0%] mb-2">Tools</p>
        <TableComponent 
        value={CharactersProficiencyTableValuesTools} 
        header={CharactersProficiencyTableHeadersTools} 
        details={undefined} />
    </div>
    <div className="selection-div ml-[10%] float-left w-[30%] mt-8 text-left h-auto">
      <p 
      className="text-[1.8em] mb-4">Languages</p>
      {languagesProfs.map((value: string, index: number) => {
        return <p key={index} 
        className="inline-block text-[.9em] bg-black/30 ml-[2%] p-[2%] rounded
         text-gray-300 transition hover:text-white hover:bg-black/50 cursor-pointer">{value}</p>
      })}
    </div>
    <div className="selection-div float-right mr-[15%] w-[30%] mt-8 h-auto text-left">
      <p 
      className="text-[1.8em] mb-4">Weapon prof</p>
      {weaponProfs.map((value: string, index: number) => {
        return <p key={index} 
        className="inline-block text-[.9em] bg-black/30 ml-[2%] p-[2%] rounded 
        transition text-gray-300 hover:text-white hover:bg-black/50 cursor-pointer">{value}</p>
      })}
    </div>
    <div className="selection-div float-right mr-[15%] w-[30%] mt-8 h-auto text-left">
      <p 
      className="text-[1.8em] mb-4">Armor prof</p>
      {armorProfs.map((value: string, index: number) => {
        return <p key={index} 
        className="inline-block text-[.9em] bg-black/30 ml-[2%] p-[2%] rounded
         transition text-gray-300 hover:text-white hover:bg-black/50 cursor-pointer">{value}</p>
      })}
    </div>
    </>
  )
}

export default Proficiency