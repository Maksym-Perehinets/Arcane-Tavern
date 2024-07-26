import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

const Characters = () => {
  return (
    <div className="flex bg-characters-page h-[1080px]">
        <LeftSide />
        <RightSide />
    </div>
  )
}

export default Characters