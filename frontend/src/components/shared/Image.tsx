const Image = () => {
  // const animText = "Animmmmmated text"
  // const animTextWrapper = document.querySelector('.titile')
  
  // const animTextArray =  animText.split('')
  
  // animTextArray.forEach(letter => {
  //   const letterElement = document.createElement('span')
  //   letterElement.textContent = letter
  //   letterElement.classList.add('letter')
  
  //   animTextWrapper.appendChild(letterElement)
  // });

  return (
    <div className="bg-image">
        <div className="welcome-text-div">
            <label className="title">Were happy to see you.</label>
            <p className="text"></p>
            <p className="text">Don't forget to have fun.</p>
            <button className="button">Explore</button>
            
        </div>

    </div>
  )
}

export default Image