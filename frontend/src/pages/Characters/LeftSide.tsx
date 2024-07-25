import MainSelection from "./MainSelection"

import Summary from "./MainSelectionOUt/Summary"
import Combat from "./MainSelectionOUt/Combat"
import Equipment from "./MainSelectionOUt/Equipment"
import Features from "./MainSelectionOUt/Features"
import Proficiency from "./MainSelectionOUt/Proficiency"
import Spells from "./MainSelectionOUt/Spells"
import { useState } from "react"


const LeftSide = () => {

  const [selectionKey, setSelectionKey] = useState(0);

  const handleSelection = (key: number) => {
    setSelectionKey(key)
  }

  const renderSwitch = () => {

    switch(selectionKey) {
      case 0: {
        return <Summary />
      }
      case 1: {
        return <Combat />
      }
      case 2: {
        return <Proficiency />
      }
      case 3: {
        return <Spells />
      }
      case 4: {
        return <Features />
      }
      case 5: {
        return <Equipment />
      }
      default: {
        return <Summary />
      }
    }
  }


  return (
    <div className="w-[60%] inline-block">
        <MainSelection onSelectionClick={handleSelection} />
        {renderSwitch()}
    </div>
  )
}

export default LeftSide