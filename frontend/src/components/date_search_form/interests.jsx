import React from "react";
import "../../assets/stylesheets/date-questionnare/interests.scss";

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
 
      let nextButton = checkStatus() ? (<button class='interests-next-button' onClick={this.continue}>Next</button>) : (<button class='interests-next-button'>Next</button> );

        return (
         
            <div class='body-6'>
              <h1 class='basics-title'>What are we looking to do?</h1>
              <h5>Select at least one</h5>
                <div class="form__group field">
                    <label class='interests-label'>
                    <input type = "radio" class="option-input radio" value="nightLife" onClick={this.updateValues} /> Nightlife
                    <input type="radio" class="option-input radio" value="artsEntertainment" onClick={this.updateValues} /> Arts & Entertainment
          
                    <input type = "radio" class="option-input radio" value="food" onClick={this.updateValues} /> Food
                    <input type = "radio" class="option-input radio" value="activeLifestyle" onClick={this.updateValues} /> Active Lifestyle
                  

                    </label>
                {nextButton}
              </div>
            </div>
         
        );
    }
}

export default Interests;

