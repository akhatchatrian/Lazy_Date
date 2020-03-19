import React from "react";

class Interests extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            categories = []
        }

        this.updateValues = this.updateValues.bind(this);
        this.continue = this.continue.bind(this);
    }

    continue() {
        this.props.updateState(this.state.categories);
        this.props.nextStep
    }

    updateValues(e) {
        e.preventDefault();
        let cats = this.state.categories.slice();

        for (let i = 0; i < cats.length; i++) {
            if (cats.includes(e.currentTarget.value)) {
                cats.splice(i, 1);
            } else {
                cats.push(e.currentTarget.value)
            }
        }

        this.setState({categories: cats})
    }

    render() {
        return (
            <div>
                <input type="checkbox" value="nightlife" onClick={this.updateValues} />
                <input type="checkbox" value="artsEntertainment" onClick={this.updateValues} />
                <input type="checkbox" value="food" onClick={this.updateValues} />
                <input type="checkbox" value="activeLifestyle" onClick={this.updateValues} />

                <button onClick={this.props.continue}>Continue</button>
            </div>
        )
    }
}

export default Interests;


renderList(list, listName) {
    return list.map(item => {
        return (
            <div key={item} className="col text-left checkbox-spacing">
                <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => this.handleChange(e, listName)}
                    value={item}
                    name={listName}
                />
                <label className="intro-label">{item}</label>
            </div>
        )
    })
}

