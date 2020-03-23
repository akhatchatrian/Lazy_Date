import React from "react"
// import "../../assets/stylesheets/date-questionnare/intimacy.scss";
class Intimacy extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentOps: this.props.options,
            levelChoice: 0
        };

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
        this.props.updateFilters(this.state.currentOps)
        this.props.updateIntimacy(this.state.levelChoice)
        this.props.nextStep()
    }

    handleCheck(e) {
        // debugger
        let newOps = {}
        let optKeys = Object.keys(this.state.currentOps)
        let intimacyItems;
        let intimacyLevel;

        switch(e.currentTarget.value) {
            case "1":
                intimacyItems = this.intimacy1;
                intimacyLevel = 1;
                break;
            case "2":
                intimacyItems = this.intimacy2;
                intimacyLevel = 2;
                break;
            case "3":
                intimacyItems = this.intimacy3;
                intimacyLevel = 3;
                break;
            default:
                intimacyItems = "";
        }

        for (let i = 0; i < optKeys.length; i++) {
            if (this.state.currentOps[optKeys[i]].length !== 0) {
                newOps[optKeys[i]] = intimacyItems[optKeys[i]]
            }
        }

        this.setState({
            currentOps: newOps,
            levelChoice: intimacyLevel
        })
    }

    render() {

        const checkStatus = () => {
            return this.state.levelChoice > 0;
         }
 
         let nextButton = checkStatus() ? ( <button onClick={this.continue}>Next</button> ) : ( <button>Next</button> );

        return (
            <div>How well do you know your date?
                <input onClick={this.handleCheck} name="intimacyRating" type="radio" value="1" />
                <input onClick={this.handleCheck} name="intimacyRating" type="radio" value="2" />
                <input onClick={this.handleCheck} name="intimacyRating" type="radio" value="3" />

                {nextButton}
            </div>
        )
    }
}

export default Intimacy;