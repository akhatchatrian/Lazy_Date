import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../../assets/stylesheets/home/home.css"

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentTab: "0"
    }

    this.toggleTabs = this.toggleTabs.bind(this);
  }

  toggleTabs(e) {
    if (e.currentTarget.id !== this.state.currentTab) {
      this.setState({currentTab: e.currentTarget.id})
    }

  }

  componentDidUpdate() {

    if (this.state.currentTab === "0") {
      let activeTab = document.getElementById("0")
      let inactiveTab = document.getElementById("1")
      activeTab.classList.remove("tab-inactive")
      inactiveTab.classList.add("tab-inactive")
    } else {
      let activeTab = document.getElementById("1")
      let inactiveTab = document.getElementById("0")
      activeTab.classList.remove("tab-inactive")
      inactiveTab.classList.add("tab-inactive")
    }
  }

  render() {
    let currentTab = this.state.currentTab === "0" ? ( <div className="datesTab">{/* Iterate through current user's dates here */}</div> ) :  
                                                 ( <div className="collectionsTab"> {/* Iterate through current user's collections */} </div>);

    return (
      <main className="home">
        <section className="home-dashboard">

          <div className="dash-sidebar">
            <div className="tabs-container">
              <div className="tab-left" id="0" onClick={this.toggleTabs}>
                <p>My Dates</p>
              </div>
              <div className="tab-right tab-inactive" id="1" onClick={this.toggleTabs}>
                <p>My Collections</p>
              </div>
            </div>
            <div className="sidebar-display">
              {currentTab}
            </div>
            <div>

            </div>
          </div>

          <div className="dash-display-container">
            <div className="dash-titlebar">
                <p className="titlebar-text">Welcome back, Romeo</p>
                <Link className="create-date-btn" to={`/date`}>
                  <p>Generate Date Ideas</p>
                </Link> 
            </div>
            <div className="dash-main-display-container">
              <div className="home-prev-button"></div> 
              <div className="dash-main-display">

              </div>
              <div className="home-next-button"></div>
            </div>
          </div>
        </section>
      
        <section className="home-bottom">
          <div className="moods-container">
            <h2>Moods</h2>
            <div className="moods-container-main">

              <div className="mood-box" id="easy-night-out" ></div>
              <div className="mood-box" id="" ></div>
              <div className="mood-box" id="adrenaline-rush" ></div>
              <div className="mood-box" id="feelin-fancy" ></div>
              <div className="mood-box" id="" ></div>
              <div className="mood-box" id="mystery" ></div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;