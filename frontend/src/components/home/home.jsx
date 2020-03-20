import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="home-container">
        <div className="home">
            <Link to={`/date`}><button className='create-date-btn'>Create a new Date</button></Link>

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
