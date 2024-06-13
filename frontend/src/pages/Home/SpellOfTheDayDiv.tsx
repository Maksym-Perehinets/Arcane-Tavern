const SpellOfTheDayDiv = () => {
  // const today = new Date()
  // const spellID = today.getMonth() * today.getDay();

  return (
    <div className='sofd-div'>
      <div className="header-div"><p className='spell-name'>Acid Splash</p></div>
      <div className="spell-main-info-div">
        <p className='info-text'>Range: 60 feet</p>
        <p className='info-text'>Casting Time: 1 action</p>
        <p className='info-text'>Duration: Instantaneous</p>
      </div>

      <p className='spell-desc'>You hurl a bubble of acid. Choose one creature you can see within range, or choose two creatures you can see within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.

This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</p>
    </div>
  )
}

export default SpellOfTheDayDiv