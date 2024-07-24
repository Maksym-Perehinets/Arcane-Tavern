import { filterWindow } from "@/constants"
import { IFilterWindow } from "@/types"
import { useState } from "react"


const FilterWindow = () => {
    
    return (
        <div className="flex">
            <div className="rounded-r-xl bg-opacity-75 bg-black/75 h-min w-min 
            flex-col p-3 font-semibold text-gray-400 border-2 border-stone-400/25 border-l-0">
                {filterWindow.map((elem: IFilterWindow) => (
                    <div key={elem.id} className="cursor-pointer hover:text-violet-300/50 transition-all group flex-col">
                        <img
                            className="flex w-[50%] self-center ml-3 my-2"
                            key={elem.id} 
                            src={elem.icon} 
                            alt={elem.id} 
                        />
                        <p className="opacity-0 group-hover:opacity-100 text-center text-xl">{elem.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilterWindow