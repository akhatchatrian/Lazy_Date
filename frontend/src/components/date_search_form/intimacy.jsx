import React from "react"

class Intimacy extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.options;

        this.intimacy1 = {
            nightLife: ["bars", "danceclubs", "karaoke", "meaderies", "cannabisdispensaries", "paintandsip"],
            artsEntertainment: ["movietheaters", "museums", "aquariums", "psychic_astrology", "virtualrealitycenters"],
            food: ["cafes", "tapas", "hotpot", "raw_food", "diners", "dumplings", "sushi", "noodles", "breakfast_brunch"],
            activeLifestyle: ["hiking", "axethrowing", "mini_golf", "beaches", "lakes"]
        }

        this.intimacy2 = {
            nightLife: ["bars", "jazzandblues", "musicvenues", "karaoke", "lasertag", "cannabisdispensaries", "silentdisco", "winetastingroom", "paintandsip", "cabaret"],
            artsEntertainment: ["escapegames", "comedyclubs", "museums", "aquariums", "psychic_astrology", "planetarium", "driveintheater"],
            food: ["creperies", "popuprestaurants", "tapas", "raw_food", "dumplings", "sushi", "noodles", "streetvendors", "breakfast_brunch", "cajun", "russian"],
            activeLifestyle: ["hiking", "axethrowing", "mini_golf", "bubblesoccer", "climbing", "yoga", "lakes", "trampoline"]
        }

        this.intimacy3 = {
            nightLife: ["bars", "cannabisdispensaries", "winetastingroom", "paintandsip", "cabaret"],
            artsEntertainment: ["comedyclubs", "museums", "aquariums", "psychic_astrology"],
            food: ["fondue", "tapas", "hotpot", "raw_food", "dumplings", "sushi", "noodles", "cajun", "russian", "gamemeat"],
            activeLifestyle: ["bungeejumping", "axethrowing", "hot_air_balloons", "bubblesoccer", "dancestudio", "gun_ranges", "skydiving", "yoga", "lakes"]
        }
    
        this.continue = this.continue.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    continue() {
        this.props.nextStep()
        this.props.updateFilters(this.state)
    }

    handleCheck(e) {
        // debugger
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