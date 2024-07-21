import { useState } from "react";

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
                className="selection-div stats-div ml-[3%] flex flex-col justify-between items-center">
                    <p className="w-full border-b-2 border-indigo-400/70 pb-2">{value}</p>
                    <p className="text-6xl font-bold text-gray-400">{demoStats[index]}</p>
                    <div className="bg-indigo-400/70 rounded-full w-[50%] h-fit mb-1">+{demoMod[index]}</div>
            </div>
            })}
        </div>
         <div className="half-div">
            <div className="selection-div main-stats first">10</div>
            <div className="selection-div main-stats">9</div>
            <div className="selection-div main-stats">2</div>

            <div className="selection-div main-stats first">5</div>
            <div className="selection-div main-stats">7</div>
            <div className="selection-div main-stats">8</div>
        </div>
        {/* <div className="half-div right">
            <div className="selection-div saving-throws">Saving throws</div>
        </div>

        <div className="half-div">
            <div className="selection-div other-stats">Other Stats</div>
        </div>
        <div className="half-div right">
            <div className="selection-div other-stats notes">Notes</div>
        </div> */}

    </div>
  )
}

export default Summary