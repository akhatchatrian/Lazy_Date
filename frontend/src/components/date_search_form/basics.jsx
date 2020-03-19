import React from "react";

class Basics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <h2>This is the Basics Page</h2>
                <button onClick={this.props.nextStep}>Next</button>
            </div>
        )
    }
}

export default Basics;