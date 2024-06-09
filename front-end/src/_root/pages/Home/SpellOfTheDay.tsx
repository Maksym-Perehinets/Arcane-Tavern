
const SpellOfTheDay = () => {

  // const today = new Date();
  // const spellLength = 572;
  // const day = today.getDate();
  // const month = today.getMonth();
  // const spellID = day * month;

  return (
    <div className="daily-spell-div">
            <div className="show-spell-div">
                <img className="gif" src="../../../../public/alchemyThing.gif" alt="" />
            </div>
            
            <p className="title-text">Do you want to reveal your spell of the day?</p>
            <div className="btn-div">
                <button className="no-btn">No</button>
                <button className="yes-btn">Yes</button>
            </div>
    </div>
  )
}

export default SpellOfTheDay