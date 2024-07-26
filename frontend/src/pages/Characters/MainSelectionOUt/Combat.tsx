import { CharactersCombatStats, CharactersCombatTableHeadersWeapons, CharactersCombatTableValues, CharactersCombatTableWeaponsValues } from "@/constants"
import { ICharactersCombatStats } from "@/types"
import Dropdown from "@/components/shared/Dropdown"
import TableComponent from "@/components/shared/TableComponent"
import { CharactersCombatTableHeaders } from "@/constants"

const Combat = () => {

  const combatStatsValues = [13,12,30,2]

  const wornArmorList = ["No Armor", "Chain Armor" , "Light Armor"]
  const wieldedShieldList = ["No Shield", "Wooden Shield"]
  const mainHandWeaponList = ["Javelin"]

  

  return (
    <div className="mt-10 ml-[10%]">
      
      <div className="w-[30%] float-left group">
          {CharactersCombatStats.map((element: ICharactersCombatStats) => {
            return <div 
            className="w-full selection-div h-[6em] mb-6 flex"
            key={element.index}>

              <img className="h-[70%] mt-[5%] mx-[5%] float-left" src={element.icon} alt="" />
              <div className="float-right block text-center w-[80%]">
                <p className="w-full text-[1.1em]">{element.label}</p>
                <input readOnly={element.readonly} defaultValue={combatStatsValues[element.index]} type="number"
                className="w-[50%] text-[2em] mt-0 mx-[40%] bg-transparent outline-none" />
              </div>
            
            </div>
          })}
      </div>  


      <div className="float-right w-[70%]">
          <div className="selection-div w-[80%] h-[100%] ml-[5%]">
              
              <div className="selection-div bg-black/0 w-[95%] my-4">
                <p className="text-[1.4em] text-left">Attacks</p>
                <p className="text-left">bla bla bla</p>
              </div>

                <div className="selection-div bg-black/0 w-[95%] my-4 text-left">
                  <p className="text-[1.4em] text-left">Equiped Items</p>

                  <div className="flex w-full text-[.9em] ml-[3%]">

                    <div className="w-[33%] block">
                      <p>Worn Armor</p>
                      {Dropdown(wornArmorList)}
                    </div>

                    <div className="w-[33%] block">
                      <p>Wielded Shield</p>
                      {Dropdown(wieldedShieldList)}
                    </div>

                    <div className="w-[33%] block">
                      <p>Main Hand Weapon</p>
                      {Dropdown(mainHandWeaponList)}
                    </div>

                  </div>
                </div>

                <div className="w-[100%] px-[2.5%] bg-transparent mt-4">
                  <div className="selection-div bg-black/0  w-[45%]">
                      <p className="text-left text-[1.2em]">Weapon Proficiencies</p>
                      <p className="text-left">bla bla</p>
                  </div>
                  <div className="selection-div bg-black/0  w-[45%] ml-[10%]">
                      <p className="text-left text-[1.2em]">Armor Proficiencies</p>
                      <p className="text-left">bla bla</p>
                  </div>
                </div>

                <div className="selection-div w-[95%] bg-black/0 mt-4">
                  <p className="text-left text-[1.4em]">Weapons</p>
                  <TableComponent 
                  header={CharactersCombatTableHeaders} value={CharactersCombatTableValues} />
                </div>
                
                <div className="selection-div w-[95%] bg-black/0 mt-4">
                  <p className="text-left text-[1.4em]">Armor</p>
                  <TableComponent header={CharactersCombatTableHeadersWeapons} value={CharactersCombatTableWeaponsValues} />
                </div>
          </div>
      </div>
    </div>
  )
}

export default Combat