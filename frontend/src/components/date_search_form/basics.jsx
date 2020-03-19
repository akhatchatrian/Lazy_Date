import React from "react";

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
        this.setState({
            price: e.currentTarget.value
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
        return(
            <form>
                <h2>This is the Basics Page</h2>

                <label>Location:
                    <input onChange={this.handleLocation} type="text"/>
                </label>

                <label>Are you and your date over the age of 21?
                    <input onClick={this.handleAge} type="checkbox"/>
                </label>

                <label>Price Range:
                    <input onClick={this.handlePrice} name="priceRange" type="radio" value="$"/>
                    <input onClick={this.handlePrice} name="priceRange" type="radio" value="$$"/>
                    <input onClick={this.handlePrice} name="priceRange" type="radio" value="$$$"/>
                    <input onClick={this.handlePrice} name="priceRange" type="radio" value="$$$$"/>
                </label>

                <button onClick={this.continue}>Next</button>
            </form>
        )
    }
}

export default Basics;

