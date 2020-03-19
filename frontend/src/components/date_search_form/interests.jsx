import React from "react";

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
        this.props.updateState(this.state.categories);
        // debugger
        this.props.nextStep()
    }

    updateValues(e) {
        // debugger
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
        return (
            <div>
                <input type="checkbox" value="nightLife" onClick={this.updateValues} />
                <input type="checkbox" value="artsEntertainment" onClick={this.updateValues} />
                <input type="checkbox" value="food" onClick={this.updateValues} />
                <input type="checkbox" value="activeLifestyle" onClick={this.updateValues} />

                <button onClick={this.continue}>Continue</button>
            </div>
        )
    }
}

export default Interests;