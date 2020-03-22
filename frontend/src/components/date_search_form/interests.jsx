import React from "react";
// import "../../assets/stylesheets/date-questionnare/interests.scss";

class Interests extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }

        this.updateValues = this.updateValues.bind(this);
        this.continue = this.continue.bind(this);
    }

    continue() {
        if (this.state.categories.length != 0) {
            this.props.updateState(this.state.categories);
            this.props.nextStep()
        } else {
            // Add functionality to render errors here
        }
    }

    updateValues(e) {
        let cats = this.state.categories.slice();

        if (cats.includes(e.currentTarget.value)) {
            let i = cats.indexOf(e.currentTarget.value);
            cats.splice(i, 1);
        } else {
            cats.push(e.currentTarget.value)
        }

        this.setState({categories: cats})
    }

    render() {

        const checkStatus = () => {
            return this.state.categories.length > 0;
         }
 
         let nextButton = checkStatus() ? ( <button onClick={this.continue}>Next</button> ) : ( <button>Next</button> );

        return (
            <div>
                <input type="checkbox" value="nightLife" onClick={this.updateValues} /> Nightlife
                <input type="checkbox" value="artsEntertainment" onClick={this.updateValues} /> Arts & Entertainment
                <input type="checkbox" value="food" onClick={this.updateValues} /> Food
                <input type="checkbox" value="activeLifestyle" onClick={this.updateValues} /> Active Lifestyle

                {nextButton}
            </div>
        )
    }
}

export default Interests;