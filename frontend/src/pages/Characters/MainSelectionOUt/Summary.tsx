
const Summary = () => {
  return (
    <div className="summary-div">
        <div className="selection-div stats-div">STR</div>
        <div className="selection-div stats-div">DEX</div>
        <div className="selection-div stats-div">CON</div>
        <div className="selection-div stats-div">INT</div>
        <div className="selection-div stats-div">WIS</div>
        <div className="selection-div stats-div">CHA</div>

        <div className="half-div">
            <div className="selection-div main-stats first">10</div>
            <div className="selection-div main-stats">9</div>
            <div className="selection-div main-stats">2</div>

            <div className="selection-div main-stats first">5</div>
            <div className="selection-div main-stats">7</div>
            <div className="selection-div main-stats">8</div>
        </div>
        <div className="half-div right">
            <div className="selection-div saving-throws">Saving throws</div>
        </div>

        <div className="half-div">
            <div className="selection-div other-stats">Other Stats</div>
        </div>
        <div className="half-div right">
            <div className="selection-div other-stats notes">Notes</div>
        </div>

    </div>
  )
}

export default Summary