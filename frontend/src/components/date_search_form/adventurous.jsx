import React from "react";
import "../../assets/stylesheets/date-questionnare/adventurous.scss";
class Adventurous extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentOps: this.props.options,
            adventurousLevel: 0
        };

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
        this.props.updateFilters(this.state.finalTerms)
        this.props.updateAdventurous(this.state.adventurousLevel)
        this.props.nextStep()
    }

    handleCheck(e) {
        // debugger
        let optKeys = Object.keys(this.state.currentOps)
        let adventureItems;
        let adventureLevel;
        let matches = [];

        switch(e.currentTarget.value) {
            case "1":
                adventureItems = this.adventurous1;
                adventureLevel = 1;
                break;
            case "2":
                adventureItems = this.adventurous2;
                adventureLevel = 2;
                break;
            case "3":
                adventureItems = this.adventurous3;
                adventureLevel = 3;
                break;
            default:
                adventureItems = "";
        }

        for (let i = 0; i < optKeys.length; i++) {
            let stateOptions = this.state.currentOps[optKeys[i]];
            let adventureOptions = adventureItems[optKeys[i]];

            let allOptions = stateOptions.concat(adventureOptions);

            let categoryMatches = allOptions.filter((item, index) => {
                return allOptions.indexOf(item) !== index
            })

            matches.push(...categoryMatches);
        }

        this.setState({
            finalTerms: matches,
            adventurousLevel: adventureLevel
        })
    }

    render(){

        const checkStatus = () => {
            return this.state.adventurousLevel > 0
         }
 
        let nextButton = checkStatus() ? (<button class='adventurous-next-button' onClick={this.continue}>Next</button>) : (<button class='adventurous-next-button'>Next</button> );

        return (
            <form class='basics-form'>
                <div class='body-5'>
                    <h1 class='basics-title'>How adventurous are you feeling?</h1>
                    <div class="form__group field">        
                        <input 
                        onClick={this.handleCheck} 
                        name="adventurousRating" 
                        type="radio" 
                        value="1"
                        class="option-input radio" 
                        />
                        Hungover on a rainy Sunday
                        <input 
                        onClick={this.handleCheck} 
                        name="adventurousRating" 
                        type="radio" 
                        value="2"
                        class="option-input radio" 
                        />
                        Ready to try something new
                        <input 
                        onClick={this.handleCheck} 
                        name="adventurousRating" 
                        type="radio" 
                        value="3"
                        class="option-input radio" 
                        />
                        My body wants to break free
                        {nextButton}
                    </div>
                </div>
            </form>
        )
    }
}

export default Adventurous;


