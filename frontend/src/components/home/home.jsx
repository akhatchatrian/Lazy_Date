import React, { Component } from "react";
import { Link } from 'react-router-dom';
import HomeCarousel from './home_carousel';
import "../../assets/stylesheets/home/home.css"

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: "0",
      prevDateIdx: null,
      currentDateIdx: 0
    };

    this.changeMainDate = this.changeMainDate.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.toggleTabs = this.toggleTabs.bind(this);
    this.getMood = this.getMood.bind(this);
  }

  componentDidMount() {
    this.props.getDateCollection(this.props.currentUser.id);
    // debugger
  }

  componentDidUpdate() {
    if (this.state.currentTab === "0") {
      let activeTab = document.getElementById("0");
      let inactiveTab = document.getElementById("1");
      activeTab.classList.remove("tab-inactive");
      inactiveTab.classList.add("tab-inactive");
    } else {
      let activeTab = document.getElementById("1");
      let inactiveTab = document.getElementById("0");
      activeTab.classList.remove("tab-inactive");
      inactiveTab.classList.add("tab-inactive");
    }
  }

  changeMainDate(idx) {
    // document
    //   .getElementById(`${this.state.currentDateIdx}`)
    //   .classList.remove("active-listing");
    // document.getElementById(`${idx}`).classList.add("active-listing");

    this.setState({
      prevDateIdx: this.state.currentDateIdx,
      currentDateIdx: idx
    });
  }

  handleClick(e) {
    this.changeMainDate(e.currentTarget.id);
  }

  handleNext() {
    let newDateIdx = (this.state.currentDateIdx + 1) % this.state.dates.length;
    this.changeMainDate(newDateIdx);
  }

  handlePrevious() {
    let newDateIdx =
      (this.state.currentDateIdx + this.state.dates.length - 1) %
      this.state.dates.length;
    this.changeMainDate(newDateIdx);
  }

  toggleTabs(e) {
    if (e.currentTarget.id !== this.state.currentTab) {
      this.setState({ currentTab: e.currentTarget.id });
    }
  }

  getMood(moodName) {
    switch (moodName) {
      case "easy-night-out":
        return {};
      case "feelin-fancy":
        return {};
      case "adrenaline-rush":
        return {};
      case "mystery":
        return {};
      default:
        return null;
    }
  }

  getPrice(string) {
    const price = string.split(" ");

    switch (price.length) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      case 4:
        return 4;
    }
  }

  getName(name) {
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }

  getInterests(interests) {
    return interests.map(interest => this.getName(interest));
  }
  render() {
    // let currentTab = this.state.currentTab === "0" ? ( <div className="datesTab">{/* Iterate through current user's dates here */}</div> ) :
    //                                              ( <div className="collectionsTab"> {/* Iterate through current user's collections */} </div>);
    if (!this.props.userDates || !this.props.userCollections) return null;
    debugger;
    let currentTab =
      this.state.currentTab === "0" ? (
        <div className="datesTab">
          {this.props.userDates.map((date, idx) => {
            return (
              <div id={idx} className="date-item-container">
                <img className="saved-date-thumbnail" src={date.image_url} />
                <p>{date.name}</p>
              </div>
            );
          })}
        </div>
      ) : this.state.currentTab === "1" ? ( // OR
        <div className="collectionsTab">
          {this.props.userCollections.map(collection => {
            return (
              <div className="collection-item-container">
                <p>{collection.name}</p>
                <div className="collection-item-params">
                  {/* <p>{collection.collectionInfo.location}</p>
                  <p>{collection.collectionInfo.interests}</p>
                  <p>{collection.collectionInfo.price}</p>
                  <p>{collection.collectionInfo.intimacy}</p>
                  <p>{collection.collectionInfo.adventurous}</p> */}

                  <div>
                    {collection.collectionName ? (
                      collection.collectionName
                    ) : (
                      <div>
                        <p>Search:</p>
                        Location:{" "}
                        {collection.collectionInfo.location.toUpperCase()},{" "}
                        {this.getInterests(collection.collectionInfo.interests)}
                        , Price:{" "}
                        {this.getPrice(collection.collectionInfo.price)},
                        Intimacy: {collection.collectionInfo.intimacy},
                        Adventure: {collection.collectionInfo.adventurous}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : null;

    return (
      <main className="home">
        <section className="home-dashboard">
          <div className="dash-sidebar">
            <div className="tabs-container">
              <div className="tab-left" id="0" onClick={this.toggleTabs}>
                <p>My Dates</p>
              </div>
              <div
                className="tab-right tab-inactive"
                id="1"
                onClick={this.toggleTabs}
              >
                <p>My Collections</p>
              </div>
            </div>
            <div className="sidebar-display">{currentTab}</div>
            <div></div>
          </div>

          <div className="dash-display-container">
            <div className="dash-titlebar">
              {/* <p className="titlebar-text">Welcome back, Romeo</p> */}
              <p className="titlebar-text">
                Welcome back, {this.getName(this.props.currentUser.name)}
              </p>
              <Link className="create-date-btn" to={`/date`}>
                <p>Generate Date Ideas</p>
              </Link>
            </div>
            <div className="dash-main-display-container">
              <div className="home-prev-button"></div>

              <HomeCarousel currentDateIdx={this.state.currentDateIdx} prevDateIdx={this.state.prevDateIdx} dates={this.props.userDates} handleNext={this.handleNext} handlePrevious={this.handlePrevious}/>

              <div className="dash-main-display"></div>
              <div className="home-next-button"></div>
            </div>
          </div>
        </section>

        <section className="home-bottom">
          <div className="moods-container">
            <h2>Moods</h2>
            <div className="moods-container-main">
              {/* <Link className="mood-box" to={{
              pathname: "/date/browse",
              state: { dates: this.getMood("easy-night-out") }
            }}></Link> */}

              <div className="mood-box" id="easy-night-out"></div>
              <div className="mood-box" id=""></div>
              <div className="mood-box" id="adrenaline-rush"></div>
              <div className="mood-box" id="feelin-fancy"></div>
              <div className="mood-box" id=""></div>
              <div className="mood-box" id="mystery"></div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;