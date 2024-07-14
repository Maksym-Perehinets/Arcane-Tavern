const Image = () => {

  const buttonExplore = () => {
    window.scrollTo(window.scrollX, 1080);
  }

  const textArray = ["We`re happy to see you.", "Greetings, and welcome", "Why are you here this time?", "Planning anything mischevious?",
    "ULTRA MEGA EASTER EGG! !", "D20chu, i choose you!", "Ultra critical failure: 0xd20=0", "return (textThatsSupposedToBeHere)", "You will roll 1 eventually", "@app.get(rollValue)", "Wizards can die from 1d6 embarassment damage", "Clove is a poser", "011001000011001000110000", "Refresh again and youll find enlightment", "28 wont always hit", "TPK is fair", "Get 2 immovable rods, trust me", "Piss off your DM for a fun and fair experience"];
    
  const randomString = Math.floor(Math.random()*textArray.length);

  const randomStringText = (randomString: number) =>  {

    return textArray[randomString];
  }

  return (
    <div className="w-full h-screen bg-cover home-bg-url">
        <div className="text-white pt-[20%]">
            <label className="pl-[3%] pb-[1.5%] text-6xl block text-neutral-200">{randomStringText(randomString)}</label>
            <p className="text"></p>
            <p className="text">Don't forget to have fun.</p>
            <button onClick={buttonExplore} className="button">Explore</button>
            
        </div>

    </div>
  )
}

export default Image