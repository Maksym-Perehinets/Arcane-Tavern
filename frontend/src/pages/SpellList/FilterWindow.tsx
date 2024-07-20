import { filterWindow } from "@/constants"
import { IFilterWindow } from "@/types"
import { useState } from "react"


const FilterWindow = () => {

    const [isVisible, setVisibility] = useState(true)

    const toggleVisibility = () => {
        if(isVisible){
            
        }
        setVisibility(!isVisible)
    }


    return (
        <div></div>
        // <div className="flex">
        //     <div className="rounded-br-xl bg-opacity-65 bg-funny-purple h-min flex flex-col p-4 gap-4">
        //         {filterWindow.map((elem: IFilterWindow) => (
        //             <p key={elem.id} className="flex gap-2 mr-8">
        //                 <img 
        //                     key={elem.id} 
        //                     src={elem.icon} 
        //                     alt={elem.id} 
        //                 />
        //                 {elem.label}
        //             </p>
        //         ))}
        //     </div>
        //     <div className="bg-funny-purple bg-opacity-65 h-min p-2 rounded-r-xl">
        //         <button onClick={() => toggleVisibility}>
        //             <img
        //                 src="../public/icons/burger.svg"
        //                 alt=""
        //                 width={150}
        //             />
        //         </button>
        //     </div>
        // </div>
    )
}

export default FilterWindow