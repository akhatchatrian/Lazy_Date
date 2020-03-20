import React from "react";

class Adventurous extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.options;

        this.adventurous1 = {
            nightLife: ["bars", "jazzandblues", "meaderies", "cannabisdispensaries", "winetastingroom", "paintandsip"],
            artsEntertainment: ["movietheaters", "museums", "aquariums", "planetarium", "driveintheater"],
            food: ["cafes", "tapas", "diners", "breakfast_brunch", "dumplings", "sushi", "noodles"],
            activeLifestyle: ["mini_golf", "beaches", "dancestudio", "yoga", "lakes"]
        }

        this.adventurous2 = {
            nightLife: ["danceclubs", "karaoke", "cannabisdispensaries", "silentdisco", "cabaret"],
            artsEntertainment: ["escapegames", "comedyclubs", "virtualrealitycenters", "planetarium", "driveintheater"],
            food: ["creperies", "popuprestaurants", "hotpot", "raw_food", "streetvendors"],
            activeLifestyle: ["hiking", "bubblesoccer", "climbing", "dancestudio", "trampoline"]
        }

        this.adventurous3 = {
            nightLife: ["karaoke", "musicvenues", "lasertag"],
            artsEntertainment: ["psychic_astrology", "virtualrealitycenters"],
            food: ["fondue", "popuprestaurants", "cajun", "russian", "gamemeat"],
            activeLifestyle: ["bungeejumping", "axethrowing", "hot_air_balloons", "gun_ranges", "skydiving"]
        }
    
        this.continue = this.continue.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    continue() {
        this.props.nextStep()
        this.props.updateFilters(this.state.finalTerms)
        
    }

    handleCheck(e) {

        let optKeys = Object.keys(this.state)
        let adventureItems;
        let matches = [];

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
            let stateOptions = this.state[optKeys[i]];
            let adventureOptions = adventureItems[optKeys[i]];

            let allOptions = stateOptions.concat(adventureOptions);

            let categoryMatches = allOptions.filter((item, index) => {
                return allOptions.indexOf(item) != index
            })

            matches.push(...categoryMatches);
        }

        this.setState({finalTerms: matches})
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


