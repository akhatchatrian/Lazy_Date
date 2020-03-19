import React from "react"
import Basics from "./basics";
import Interests from "./interests";
import Intimacy from "./intimacy";
import Adventurous from "./adventurous";

class DateSearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStep: 0,
            options: {
                nightLife: ["bars", "clubs"],
                artsEntertainment: ["cinema", "escape room"],
                food: ["fast food", "fancy"],
                activeLifestyle: ["hiking trails", "bungee jumping"]
            },
            conditions: {
                age: 0,
                location: "",
                price: 0
            }
        }

        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    updateState(fieldList) {

        // Get a load of this beaut
        let optionKeys = Object.keys(this.state.options);
        let newOps = Object.assign({}, this.state.options);

        for (let i = 0; i < optionKeys.length; i++) {
            if (!fieldList.includes(optionKeys[i])) {
               newOps[optionKeys[i]] = []
            }
        }

        this.setState({options: newOps})
    }

    nextStep() {
        if (this.state.currentStep < 3) {
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

    render() {
        switch (this.state.currentStep) {
            case 0:
                return <Basics
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    currentUser={this.props.currentUser}
                    conditions={this.state.conditions}
                    updateState={this.updateState}
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
                debugger
                return <Intimacy
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    currentUser={this.props.currentUser}
                    options={this.state.options}
                    updateState={this.updateState}
                />
            case 3:
                return <Adventurous
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    currentUser={this.props.currentUser}
                    options={this.state.options}
                    updateState={this.updateState}
                />
            default:
                // return <Redirect to="TBD" />
                return null;
        }
    }

}

export default DateSearchForm;