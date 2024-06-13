
const Info = () => {

  const handleClick = (myLink : string) => () => {
    window.location.href=myLink;
  }

  return (
    <div className="info-div">
        <p className="upper-text">A quick introduction</p>
        <div className="chat-text-div">
          <div className="wrapper"><div className="messages-div left"><p>Where am I?</p></div></div>
          <div className="wrapper"><div className="messages-div right"><p>You’re currently residing at the Arcane Tavern,
            home of various DnD tools to make your life easier, whether you’re a DM or a player</p></div></div>
          <div className="wrapper"><div className="messages-div left">What tools can i use?</div></div>
          <div className="wrapper circle">
            <div onClick={handleClick('/spell-list')} className="circle"><img className="png" src="https://dvoxsotka.s3.amazonaws.com/arcane-tavern/databaseWizard.png" alt="womp womp :(" /></div>
            <div onClick={handleClick('/characters')} className="circle"><img className="png" src="https://dvoxsotka.s3.amazonaws.com/arcane-tavern/cuteChar.png" alt="womp womp :(" /></div>
            <div onClick={handleClick('/charsheet')} className="circle"><img className="png" src="https://dvoxsotka.s3.amazonaws.com/arcane-tavern/diceBrush.png" alt="womp womp :(" /></div>
          </div>
          <div className="wrapper">
            <p className="under-text">Robust database full of spells, complete with filters, search and a tool to create your own spells</p>
            <p className="under-text">Character creation tool, using DnD 5e charsheet, fully editable to suit all of your needs</p>
            <p className="under-text">Nice and cozy menus, designed with minimizing eye strain in mind</p>
          </div>
        </div>
      
    </div>
  )
}

export default Info