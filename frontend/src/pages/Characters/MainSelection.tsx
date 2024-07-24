const MainSelection = () => {

  const navSelection = ["Summary", "Combat", "Probiciency", "Spells", "Features", "Equipment"]

  return (
    <>
    <div className="mt-[3.7em] ml-[10%] rounded p-0 ">
      {navSelection.map((value: string, index: number) => {
        return (
          <div 
            className="selection-div mselection" 
            tabIndex={index}
            key={index}>{value}</div>
          )
      })}
    </div>
    </>
    
  )
}

export default MainSelection