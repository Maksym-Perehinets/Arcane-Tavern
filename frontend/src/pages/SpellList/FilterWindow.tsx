import { filterWindow } from "@/constants"
import { IFilterWindow } from "@/types"
import { useState } from "react"


const FilterWindow = () => {

    const [isVisible, setVisibility] = useState(false)
    const [translateOnX, setTranslateOnX] = useState(0);

    const toggleVisibility = () => {
        isVisible ? setTranslateOnX(prev => prev + 120) : setTranslateOnX(prev => prev - 120)
        setVisibility(!isVisible)
    }


    return (
        <div 
            className="flex" 
            style={{
                transform: `translate(${translateOnX}px)`,
                transition: 'transform 0.5s'}}>
            <div className="rounded-r-xl bg-opacity-95 bg-funny-purple h-min w-min flex flex-col p-4 gap-4">
                {filterWindow.map((elem: IFilterWindow) => (
                    <p key={elem.id} className="flex gap-2 mr-8">
                        <img 
                            key={elem.id} 
                            src={elem.icon} 
                            alt={elem.id} 
                        />
                        {elem.label}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default FilterWindow