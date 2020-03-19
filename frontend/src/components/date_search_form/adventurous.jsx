import React from "react";

class Adventurous extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.options;

        this.adventurous1 = {
            nightLife: ["bars", "clubs"],
            artsEntertainment: ["cinema"],
            food: ["fast food"],
            activeLifestyle: []
        }

        this.adventurous2 = {
            nightLife: [],
            artsEntertainment: ["escape room"],
            food: ["fancy"],
            activeLifestyle: ["hiking trails"]
        }

        this.adventurous3 = {
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
        let adventureItems;

        switch(e.currentTarget.value) {
            case "1":
                adventureItems = this.adventurous1;
                break;
            case "2":
                adventureItems = this.adventurous2;
                break;
            case "3":
                adventureItems = this.adventurous3;
                break;
            default:
                adventureItems = "";
        }

        for (let i = 0; i < optKeys.length; i++) {
            if (this.state[optKeys[i]].length != 0) {
                newOps[optKeys[i]] = adventureItems[optKeys[i]]
            }
        }

        this.setState(newOps)
    }

    render(){
        return (
            <div>How adventurous are you feeling?
                <input onClick={this.handleCheck} name="adventurousRating" type="radio" value="1" />
                <input onClick={this.handleCheck} name="adventurousRating" type="radio" value="2" />
                <input onClick={this.handleCheck} name="adventurousRating" type="radio" value="3" />

                <button onClick={this.continue}>Next</button>
            </div>
        )
    }
}

export default Adventurous;