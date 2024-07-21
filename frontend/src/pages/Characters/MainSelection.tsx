const MainSelection = () => {

  const navSelection = ["Summary", "Combat", "Probiciency", "Spells", "Features", "Equipment"]

  return (
    <>
    <div className="mt-20 ml-[10%] rounded p-0 ">
      {navSelection.map((value: string, index: number) => {
        return <div className="selection-div mselection" tabIndex={index}>{value}</div>
      })}
    </div>
    </>
    
  )
}

export default MainSelection