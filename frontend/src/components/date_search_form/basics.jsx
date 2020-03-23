import React from "react";
import "../../assets/stylesheets/date-questionnare/basics.scss";
class Basics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            age: false,
            location: "",
            price: 0
        }

        this.handleAge = this.handleAge.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.continue = this.continue.bind(this);
    }

    handleAge(e) {
        this.setState({
            age: e.currentTarget.checked
        })
    }

    handlePrice(e) {

        let newPrice;
        switch (e.currentTarget.value) {
            case "1":
                newPrice = "1"
                break;
            case "2":
                newPrice = "1,2"
                break;
            case "3":
                newPrice = "1,2,3"
                break;
            case "4":
                newPrice = "1,2,3,4"
                break;
            default:
                return "1"
                break;
        }

        this.setState({
            price: newPrice
        })
    }

    handleLocation(e) {
        this.setState({
            location: e.currentTarget.value
        })
    }

    continue() {
        this.props.updateConditions(this.state);
        this.props.nextStep()
    }

    render() {

        const checkStatus = () => {
           return this.state.location !== "" && this.state.price !== 0
        }

        let nextButton = checkStatus() ? ( <button class='next-button' onClick={this.continue}>Next</button> ) : ( <button class='next-button'>Next</button> );

        return(
            <form class='basics-form'>
              <div class='basics-body-1'>
                <h1 class='basics-title'>Let's Start</h1>
            
                <div class="form__group field">
                    <input 
                    onChange={this.handleLocation} 
                    type="text" class="form__field" 
                    placeholder="Location" 
                    name="location" 
                    id='location' 
                    autocomplete="off" 
                    required 
                    />
                    <label 
                    for="location" 
                    class="form__label">
                    Location
                    </label>
                </div>
              
            
              <div class="form__group field">
                <div class="form__group field">
                  <label class='age-text'>
                    Are you and your date over the age of 21?
                    <input 
                    onClick={this.handleAge} 
                    type="radio" 
                    class="option-input radio"
                    />
                  </label>

                </div>
                </div>
              
                  <br></br>
          
              <div class="form__group field">
                  <label class='price-label'>
                  Price Range:
                  <label>
                    <input
                    onClick={this.handlePrice}
                    name="priceRange"
                    type="radio"
                    value="1"
                    class="option-input radio"
                    />
                    $
                  </label>

                  <label class='price-label'>
                    <input
                    onClick={this.handlePrice}
                    name="priceRange"
                    type="radio"
                    value="2"
                    class="option-input radio"
                    />
                    $$
                    </label>

                  <label class='price-label'>
                    <input
                    onClick={this.handlePrice}
                    name="priceRange"
                    type="radio"
                    value="3"
                    class="option-input radio"
                    />
                    $$$
                  </label>

                <label class='price-label'>
                    <input
                    onClick={this.handlePrice}
                    name="priceRange"
                    type="radio"
                    value="4"
                    class="option-input radio"
                    />
                    $$$$
                </label>
            </label>

            {nextButton}
            </div>
              </div>

             
            </form>
      
        );
    }
}

export default Basics;

