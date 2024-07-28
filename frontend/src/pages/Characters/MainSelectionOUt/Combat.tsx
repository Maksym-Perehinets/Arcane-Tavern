import { CharactersCombatStats, CharactersCombatTableHeadersWeapons, CharactersCombatTableValues, CharactersCombatTableWeaponsValues } from "@/constants";
import { ICharactersCombatStats } from "@/types";
import Dropdown from "@/components/shared/Dropdown";
import TableComponent from "@/components/shared/TableComponent";
import { CharactersCombatTableHeaders } from "@/constants";
import { AdditionalWeaponsTableHeaders } from "@/constants";
import { AdditionalArmorTableValues } from "@/constants";

const Combat = () => {
  const combatStatsValues = [13, 12, 30, 2];

  const wornArmorList = ["No Armor", "Chain Armor", "Light Armor"];
  const wieldedShieldList = ["No Shield", "Wooden Shield"];
  const mainHandWeaponList = ["Javelin"];

  return (
    <div className="mt-10 ml-[10%]">
      <div className="w-[30%] float-left group">
        {CharactersCombatStats.map((element: ICharactersCombatStats) => {
          return (
            <div
              className="w-full selection-div h-[6em] mb-6 flex"
              key={element.index}
            >
              <img
                className="h-[70%] mt-[5%] mx-[5%] float-left"
                src={element.icon}
                alt=""
              />
              <div className="float-right block text-center w-[80%]">
                <p className="w-full text-[1.1em] text-gray-200">{element.label}</p>
                <input
                  readOnly={element.readonly}
                  defaultValue={combatStatsValues[element.index]}
                  type="number"
                  className="w-[50%] text-[2em] mt-0 mx-[40%] text-gray-300 bg-transparent outline-none transition font-bold hover:text-white"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="float-right w-[70%]">
        <div className="selection-div w-[80%] h-[100%] ml-[5%]">
          <div className="selection-div bg-black/0 w-[95%] my-4 px-[2%]">
            <p className="text-[1.4em] text-left">Attacks</p>
            <p className="text-left text-[.9em]">bla bla bla</p>
          </div>

          <div className="selection-div bg-black/0 w-[95%] my-4 text-left px-[2%]">
            <p className="text-[1.4em] text-left">Equipped Items</p>

            <div className="flex w-full text-[.9em] ml-[3%]">
              <div className="w-[33%] block">
                <p className="text-gray-300">Worn Armor</p>
                {Dropdown(wornArmorList)}
              </div>

              <div className="w-[33%] block">
                <p className="text-gray-300">Wielded Shield</p>
                {Dropdown(wieldedShieldList)}
              </div>

              <div className="w-[33%] block">
                <p className="text-gray-300">Main Hand Weapon</p>
                {Dropdown(mainHandWeaponList)}
              </div>
            </div>
          </div>

          <div className="w-[100%] px-[2.5%] bg-transparent mt-4">
            <div className="selection-div bg-black/0  w-[48.5%] px-[2%]">
              <p className="text-left text-[1.2em] pb-[2%]">Weapon Proficiencies</p>
              <p className="text-left text-[.8em]">bla bla</p>
            </div>
            <div className="selection-div bg-black/0  w-[48.5%] ml-[3%] px-[2%]">
              <p className="text-left text-[1.2em] pb-[2%]">Armor Proficiencies</p>
              <p className="text-left text-[.8em]">bla bla</p>
            </div>
          </div>

          <div className="selection-div w-[95%] bg-black/0 mt-8">
            <p className="text-left text-[1.4em] px-[2%] pb-[1%]">Weapons</p>
            <TableComponent
              header={CharactersCombatTableHeadersWeapons}
              value={CharactersCombatTableWeaponsValues}
              details={AdditionalWeaponsTableHeaders}
            />
          </div>

          <div className="selection-div w-[95%] bg-black/0 mt-8">
            <p className="text-left text-[1.4em] px-[2%] pb-[1%]">Armor</p>
            <TableComponent
              header={CharactersCombatTableHeaders}
              value={CharactersCombatTableValues}
              details={AdditionalArmorTableValues}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Combat;
