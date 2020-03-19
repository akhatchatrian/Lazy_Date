import React from "react"

class Intimacy extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.options;

        this.intimacy1 = {
            nightLife: ["bars", "clubs"],
            artsEntertainment: ["cinema"],
            food: ["fast food"],
            activeLifestyle: []
        }

        this.intimacy2 = {
            nightLife: [],
            artsEntertainment: ["escape room"],
            food: ["fancy"],
            activeLifestyle: ["hiking trails"]
        }

        this.intimacy3 = {
            nightLife: [],
            artsEntertainment: [],
            food: [],
            activeLifestyle: ["bungee jumping"]
        }
    
        this.continue = this.continue.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }


    continue() {
        this.props.nextStep()
        this.props.updateFilters(this.state)
    }

    handleCheck(e) {
        debugger
        let newOps = {}
        let optKeys = Object.keys(this.state)
        let intimacyItems;

        switch(e.currentTarget.value) {
            case "1":
                intimacyItems = this.intimacy1;
                break;
            case "2":
                intimacyItems = this.intimacy2;
                break;
            case "3":
                intimacyItems = this.intimacy3;
                break;
            default:
                intimacyItems = "";
        }

        for (let i = 0; i < optKeys.length; i++) {
            if (this.state[optKeys[i]].length != 0) {
                newOps[optKeys[i]] = intimacyItems[optKeys[i]]
            }
        }

        this.setState(newOps)
    }

    render() {
        return (
            <div>How comfortable do you feel with your partner?
                <input onClick={this.handleCheck} name="intimacyRating" type="radio" value="1" />
                <input onClick={this.handleCheck} name="intimacyRating" type="radio" value="2" />
                <input onClick={this.handleCheck} name="intimacyRating" type="radio" value="3" />

                <button onClick={this.continue}>Next</button>
            </div>
        )
    }
}

export default Intimacy;