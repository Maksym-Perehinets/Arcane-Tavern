const Image = () => {

  const buttonExplore = () => {
    window.scrollTo(window.scrollX, 1080);
  }

  return (
    <div className="bg-image">
        <div className="welcome-text-div">
            <label className="title">Were happy to see you.</label>
            <p className="text"></p>
            <p className="text">Don't forget to have fun.</p>
            <button onClick={buttonExplore} className="button">Explore</button>
            
        </div>

    </div>
  )
}

export default Image