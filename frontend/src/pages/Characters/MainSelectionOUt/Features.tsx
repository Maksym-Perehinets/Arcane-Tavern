import { CharacterPageDamageResistance, CharacterPageAttacks, CharacterPageActions } from "@/constants"


const Features = () => {
  return (
    <div className="ml-[10%] mt-8">

      <div className="selection-div w-[35%]">
        <p className="mb-2 text-[1.4em]">Damage Resistance</p>
        {CharacterPageDamageResistance.map((value: string, index: number) => {
          return <p 
          className="inline-block text-[.9em] bg-black/30 ml-[2%] p-[2%] rounded
          transition text-gray-300 hover:text-white hover:bg-black/50 cursor-pointer my-1"
          key={index}>{value}</p>
        })}
      </div>

      <div className="selection-div w-[45%] mr-[10%] float-right">
        <p className="text-[1.4em]">Attacks</p>
        {CharacterPageAttacks.map((value: string, index: number) => {
          return <p 
          className="inline-block text-[.9em] bg-black/30 ml-[2%] p-[2%] rounded
          transition text-gray-300 hover:text-white hover:bg-black/50 cursor-pointer my-1"
          key={index}>{value}</p>
        })}
      </div>

      <div className="selection-div w-[55%] mr-[10%] mt-20 float-right">
          <p className="text-[1.4em]">Actions</p>
          {CharacterPageActions.map((value: string, index: number) => {
              return <p 
              className="inline-block text-[.9em] bg-black/30 ml-[2%] p-[2%] rounded
              transition text-gray-300 hover:text-white hover:bg-black/50 cursor-pointer my-1"
              key={index}>{value}</p>
          })}
      </div>

    </div>
  )
}

export default Features