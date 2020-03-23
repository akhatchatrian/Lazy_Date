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
    this.getMood = this.getMood.bind(this);
  }

  componentDidMount() {
    this.props.getDateCollection(this.props.currentUser.id)
    // debugger
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

  toggleTabs(e) {
    if (e.currentTarget.id !== this.state.currentTab) {
      this.setState({currentTab: e.currentTarget.id})
    }

  }

  getMood(moodName) {
    let searchTerms;
    switch (moodName) {
      case "easy-night-out":
        searchTerms = {
          searchParams: "bars,danceclubs,jazzandblues,musicvenues",
          conditions: {
            age: false,
            location: "San Francisco",
            price: 2
          }
        }
        this.props.yelpSearch(searchTerms);
        break;
      case "feelin-fancy":
        searchTerms = {
          searchParams: "",
          conditions: {
            age: false,
            location: "San Francisco",
            price: 4
          }
        }
        this.props.yelpSearch(searchTerms);
        break;
      case "adrenaline-rush":
        searchTerms = {
          searchParams: "bungeejumping,gun_ranges,challengecourses",
          conditions: {
            age: false,
            location: "San Francisco",
            price: "2,3,4"
          }
        }
        this.props.yelpSearch(searchTerms);
        break;
      case "mystery":
        searchTerms = {
          searchParams: "",
          conditions: {
            age: false,
            location: "San Francisco",
            price: 2
          }
        }
        this.props.yelpSearch(searchTerms);
        break;
      case "Artistic":
        searchTerms = {
          searchParams: "artclasses,photoclasses",
          conditions: {
            age: false,
            location: "San Francisco",
            price: 2
          }
        }
        this.props.yelpSearch(searchTerms);
        break;
      default:
        return null
    }
  }

  render() {

    let currentTab = this.state.currentTab === "0" ? 
    ( <div className="datesTab">
        {this.props.userDates.map(date => {
          return (
            <div id={Date.now} className="date-item-container">
                <img className="saved-date-thumbnail" src={date.image_url}/>
                <p>{date.name}</p>
            </div>
          )
        })}
      </div> )
    :  // OR
    ( <div className="collectionsTab">
        {/* {this.props.date.map(collection => {
          return (
            <div className="collection-item-container">
                <p>{collection.name}</p>
                <div className="collection-item-params">
                  <p>{collection.collectionInfo.location}</p>
                  <p>{collection.collectionInfo.interests}</p>
                  <p>{collection.collectionInfo.price}</p>
                  <p>{collection.collectionInfo.intimacy}</p>
                  <p>{collection.collectionInfo.adventurous}</p>
                </div>
            </div>
          )
        })} */}
      </div>);

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

            <Link className="mood-box" to={{
              pathname: "/date/browse",
              state: { dates: this.getMood("easy-night-out") }
            }}></Link>


            <Link className="mood-box" to={{
              pathname: "/date/browse",
              state: { dates: this.getMood("adrenaline-rush") }
            }}></Link>

            <Link className="mood-box" to={{
              pathname: "/date/browse",
              state: { dates: this.getMood("feelin-fancy") }
            }}></Link>

            <Link className="mood-box" to={{
              pathname: "/date/browse",
              state: { dates: this.getMood("mystery") }
            }}></Link>


            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;