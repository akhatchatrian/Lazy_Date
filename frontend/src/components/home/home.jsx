import React, { Component } from "react";

class Home extends Component {
  componentDidMount() {debugger}

  render() {
    return (
      <div className="home-container">
        <div className="home">
          <p>This yo homepage</p>
          <div className="home-recent">
            <h3>Your recent dates > </h3>
            <p>What did you think? Write a review:</p>
          </div>
          <div className="home-explore">
            <h3>Explore new date ideas > </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
