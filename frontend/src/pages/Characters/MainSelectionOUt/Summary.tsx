import { ICharactersStatsIcons } from "@/types";
import { charactersPageStatsIcons } from "@/constants";

const Summary = () => {

    const cardStats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
    const demoStats = [10,9,2,5,7,8];
    const demoMod = [1,2,0,1,1,2];
    const savingThrows = [];


  return (
    <div className="summary-div ml-[0%]">
        <div className="ml-[7%] mt-[2%] flex">
            {cardStats.map((value: string,index: number) => {
                return <div 
                tabIndex={index}
                className="selection-div stats-div ml-[3%] flex flex-col justify-between items-center cursor-default select-text">
                    <p className="w-full border-b-2 border-indigo-400/70 pb-2">{value}</p>
                    <p className="text-6xl font-bold text-gray-400 cursor-text">{demoStats[index]}</p>
                    <div className="bg-indigo-400/70 rounded-full w-[50%] h-fit mb-1">+{demoMod[index]}</div>
            </div>
            })}
        </div>
         <div className="selection-div w-[30%] h-40 ml-[10%] mt-[2%]">
            {charactersPageStatsIcons.map((element: ICharactersStatsIcons) => {
                return <div className="bg-indigo-400/70 w-[22%] rounded-3xl p-1 mx-[5%] my-2.5 inline-flex justify-between items-center">
                    <img className="w-[40%]" key={element.id} src={element.icon} alt="" />
                    <p className="float-right mr-[10%] text-3xl text-gray-200">{demoStats[element.iconIndex]}</p>
                </div>
            })}
        </div>
        <div className=" selection-div float-right mr-[9%] mt-[2%] h-40 w-[47.5%]">
            <p className="text-center text-3xl text-gray-400">Saving throws</p>
            {cardStats.map((value: string, index: number) => {
                return <div className="inline-flex flex-col justify-between items-center px-4 py-5">
                    <p className="text-5xl text-indigo-300">+{demoMod[index]}</p>
                    <p className="text-gray-400 font-bold text-2xl" key={index}>{value}</p>
                </div>
            })}
        </div>

        {/* <div className="half-div">
            <div className="selection-div other-stats">Other Stats</div>
        </div>
        <div className="half-div right">
            <div className="selection-div other-stats notes">Notes</div>
        </div> */}

    </div>
  )
}

export default Summary