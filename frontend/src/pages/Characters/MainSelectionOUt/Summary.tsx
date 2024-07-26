import { useState } from "react";
import { ICharactersStatsIcons } from "@/types";
import { charactersPageStatsIcons } from "@/constants";

const Summary = () => {

    const cardStats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
    const demoStats = [10,9,2,5,7,8];
    const demoMod = [1,2,0,1,1,2];
    const otherStats = ["Acrobatics", "Animal Handling", 
        "Arcana","Athletics","Deception","History",
        "Insight","Intimidation","Investigation", "Medicine",
        "Nature", "Perception","Performance","Persuasion",
        "Religion", "Sleight of Hand", "Stealth", "Survival"];

        const [notesText, setNotesText] = useState("");

        const onInput = (e: any) => setNotesText(e.target.value);
      
        const onClear = () => {
          setNotesText("");
        };
    


  return (
    <div className="summary-div ml-[0%]">
        
        <div className="ml-[7%] mt-[2%] flex">
            {cardStats.map((value: string,index: number) => {
                return <div 
                tabIndex={index}
                key={index}
                className="selection-div stats-div ml-[3%] flex flex-col justify-between items-center cursor-default select-text">
                    
                    <p 
                    className="w-full border-b-2 border-indigo-400/70 pb-2">{value}</p>

                    <p 
                    className="text-[4vmax] font-bold text-gray-400 cursor-pointer transition ease-in-out 
                    duration-300 hover:text-gray-300">{demoStats[index]}</p>

                    <div 
                    className="bg-indigo-400/70 rounded-full w-[50%] h-fit mb-1 cursor-pointer 
                    transition ease-in-out delay-150 bg-indigo-400 hover:-translate-y-1 hover:scale-110
                    hover:bg-indigo-500 duration-300">+{demoMod[index]}</div>
            </div>
            })}
        
        </div>
         <div className="selection-div w-[30%] h-[8.5em] ml-[10%] mt-[2%]">
            {charactersPageStatsIcons.map((element: ICharactersStatsIcons) => {
                return <div
                 className="bg-indigo-400/70 w-[22%] rounded-full p-1 mx-[5%] my-[.6em] inline-flex 
                 justify-between items-center cursor-pointer transition ease-in-out delay-150 bg-indigo-400
                hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                 key={element.iconIndex}>
                    
                    <img className="w-[40%]" key={element.id} src={element.icon} alt="" />
                    <p 
                    className="float-right mr-[10%] text-[2.5vh] text-gray-200 hover:text-white">
                    {demoStats[element.iconIndex]}</p>
                </div>
            })}
        </div>
        
        <div className=" selection-div float-right mr-[9%] mt-[2%] h-[8.5em] w-[47.5%]">
            
            <p className="text-center text-[1.4em] text-gray-400">Saving throws</p>
            {cardStats.map((value: string, index: number) => {
                return <div className="inline-flex flex-col justify-between items-center 
                px-[1em] py-[.5em] transition ease-in-out delay-150 hover:-translate-y-[1px] hover:scale-105"
                key={index}>
                    
                    <p className="text-[1.8em] text-indigo-300 cursor-pointer ransition ease-in-out
                     hover:text-indigo-200 duration-300">+{demoMod[index]}</p>
                    
                    <p className="text-gray-400 font-bold text-[2vh] transition ease-in-out 
                    hover:text-gray-300 duration-300" key={index}>{value}</p>
                </div>
            })}
        </div>

        <div className="selection-div ml-[10%] w-[37%] mt-[2%] text-left inline-table">
            {otherStats.map((value: string, index: number) => {
                return <div className="inline-block w-[50%] my-0.5"
                key={index}>
                    
                    <div className="text-gray-200">{value}: 
                    <div 
                    className="bg-indigo-400/70 rounded-full
                     w-[2em] h-[2em] text-[1em] p-1 text-center inline
                      shrink-0 grow-0 float-right mr-[.5em] items-center 
                      align-middle leading-1 text-gray-100 cursor-pointer
                      transition ease-in-out delay-150 hover:scale-110
                    hover:bg-indigo-500/70 duration-300 hover:text-white">+{index}</div>
                     </div></div>
            })}
        </div>
        
        <div className="selection-div mr-[9%] mt-[2%] w-[42%] h-[20em] float-right">
            <p className="text-[2.6vmin] text-gray-400">Notes</p>
            
            <textarea placeholder="Type your notes here..." 
            className="bg-transparent w-full h-[15em] focus:outline-none resize-none text-[2vh]" 
            name="notes" cols={30} rows={10} onInput={onInput} value={notesText}></textarea>
            
            <button 
            className="text-violet-400 cursor-pointer transition ease-in-out delay-150
             hover:-translate-y-1 hover:scale-110
            hover:text-violet-500 duration-300"
            onClick={onClear}>Clear</button>
            

        </div>

    </div>
  )
}

export default Summary