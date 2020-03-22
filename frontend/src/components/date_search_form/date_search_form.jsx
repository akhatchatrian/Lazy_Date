import React from "react"
import Basics from "./basics";
import Interests from "./interests";
import Intimacy from "./intimacy";
import Adventurous from "./adventurous";
import HomeContainer from "../home/home_container";
import { Redirect } from "react-router"


class DateSearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStep: 0,
            options: {
                nightLife: ["bars", "danceclubs", "jazzandblues", "musicvenues", "karaoke", "lasertag", "meaderies", "cannabisdispensaries", "silentdisco", "winetastingroom", "paintandsip", "cabaret"],
                artsEntertainment: ["movietheaters", "escapegames", "comedyclubs", "museums", "aquariums", "psychic_astrology", "virtualrealitycenters", "planetarium", "driveintheater"],
                food: ["fondue", "creperies", "cafes", "popuprestaurants", "tapas", "hotpot", "raw_food", "streetvendors", "diners", "dumplings", "sushi", "noodles", "breakfast_brunch", "cajun", "russian", "gamemeat"],
                activeLifestyle: ["hiking", "bungeejumping", "axethrowing", "hot_air_balloons", "mini_golf", "beaches", "bubblesoccer", "climbing", "dancestudio", "yoga", "gun_ranges", "lakes", "skydiving", "trampoline"]
            },
            conditions: {
                age: false,
                location: "",
                price: 0
            },
            intimacy: 0,
            adventurous: 0,
            interests: []
        }

        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.updateState = this.updateState.bind(this);
        this.updateConditions = this.updateConditions.bind(this);
        this.updateFilters = this.updateFilters.bind(this);
        this.updateIntimacy = this.updateIntimacy.bind(this);
        this.updateAdventurous = this.updateAdventurous.bind(this);
    }

    updateState(interestList) {
        let optionKeys = Object.keys(this.state.options);
        let newOps = Object.assign({}, this.state.options);

        for (let i = 0; i < optionKeys.length; i++) {
            if (!interestList.includes(optionKeys[i])) {
               newOps[optionKeys[i]] = []
            }
        }

        this.setState({
            options: newOps, 
            interests: interestList
        })
    }

    updateConditions(newConditions) {
        this.setState({conditions: newConditions})
    }

    updateFilters(newList) {
        this.setState({options: newList})
    }

    updateIntimacy(intimacyLevel) {
        this.setState({intimacy: intimacyLevel})
    }

    updateAdventurous(adventruousLevel) {
        this.setState({adventurous: adventruousLevel})
    }

    nextStep() {
        if (this.state.currentStep < 4) {
            this.setState((prevState) => ({
                currentStep: prevState.currentStep + 1
            }))
        } 
    }

    prevStep() {
        if (this.state.currentStep > 0) {
            this.setState((prevState) => ({
                currentStep: prevState.currentStep - 1
            }))
        }
    }

    formSubmission() {
        
        const formData = {
            user: this.props.currentUser.id,
            yelpInfo: {
                searchParams: this.state.options.join(","),
                conditions: this.state.conditions
            },
            collectionInfo: {
                intimacy: this.state.intimacy,
                adventurous: this.state.adventurous,
                interests: this.state.interests,
                age: this.state.conditions.age,
                location: this.state.conditions.location,
                price: this.state.conditions.price
            }
        }

        this.props.yelpSearch(formData.yelpInfo)
        
        return formData;
    }

    render() {
        switch (this.state.currentStep) {
            case 0:
                return <Basics
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    currentUser={this.props.currentUser}
                    updateConditions={this.updateConditions}
                />
            case 1:
                return <Interests
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    currentUser={this.props.currentUser}
                    options={this.state.options}
                    updateState={this.updateState}
                />
            case 2:
                return <Intimacy
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    currentUser={this.props.currentUser}
                    options={this.state.options}
                    updateFilters={this.updateFilters}
                    updateIntimacy={this.updateIntimacy}
                />
            case 3:
                return <Adventurous
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    currentUser={this.props.currentUser}
                    options={this.state.options}
                    updateFilters={this.updateFilters}
                    updateAdventurous={this.updateAdventurous}
                />
            default:
               return <Redirect to={{
                   pathname: "/date/browse",
                   state: this.formSubmission()
               }} />
                
        }
    }

}

export default DateSearchForm;


