import React from "react"
import Basics from "./basics";
import Interests from "./interests";
import Intimacy from "./intimacy";
import Adventurous from "./adventurous";
import HomeContainer from "../home/home_container";

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
            }
        }

        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.updateState = this.updateState.bind(this);
        this.updateConditions = this.updateConditions.bind(this);
        this.updateFilters = this.updateFilters.bind(this);
    }

    updateState(fieldList) {
        let optionKeys = Object.keys(this.state.options);
        let newOps = Object.assign({}, this.state.options);

        for (let i = 0; i < optionKeys.length; i++) {
            if (!fieldList.includes(optionKeys[i])) {
               newOps[optionKeys[i]] = []
            }
        }

        this.setState({options: newOps})
    }

    updateConditions(newConditions) {
        this.setState({conditions: newConditions})
    }

    updateFilters(newList) {
        this.setState({options: newList})
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
        let queryTerms = {
            searchParams: this.state.options.join(","),
            conditions: this.state.conditions
        }
        
        this.props.yelpSearch(queryTerms)
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
                />
            case 3:
                return <Adventurous
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    currentUser={this.props.currentUser}
                    options={this.state.options}
                    updateFilters={this.updateFilters}
                />
            default:
                this.formSubmission()
                return <div>Here is the post-form</div>
        }
    }

}

export default DateSearchForm;