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

    this.toggleTabs = this.toggleTabs.bind(this);
  }

 
  componentDidMount() {
    
    this.props.getCurrentUser()
    // this.props.receiveCurrentUser(this.props.currentUser);
    // this.setState(this.state.savedDates = this.props.userDates)
    this.props.getDateCollection(this.props.currentUser.id);
  }

  componentDidUpdate() {
    if (this.state.currentTab === "0") { // This can be optimized later
      let activeTab = document.getElementById("0")
      let inactiveTab = document.getElementById("1")
      activeTab.classList.remove("tab-inactive")
      inactiveTab.classList.add("tab-inactive")
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



  toggleTabs(e) {
    if (e.currentTarget.id !== this.state.currentTab) {
      this.setState({ currentTab: e.currentTarget.id });
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
      default:
        return 1;
    }
  }

  getName(name) {
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }

  getInterests(interests) {
    return interests.map(interest => this.getName(interest));
  }
  render() {
    if (!this.props.userDates || !this.props.userCollections) return null;
    let currentTab =
      this.state.currentTab === "0" ? (
        <div className="datesTab">
          {this.props.userDates.map((date, idx) => {
            return (
              <div
                id={idx}
                className="date-item-container"
                onClick={e => this.handleClick(e)}
              >
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

                  <div className="col-item">
                    {collection.collectionName ? (
                      collection.collectionName
                    ) : (
                      <div>
                        <p>Search:</p>
                        Location:{" "}
                        {!collection.collectionInfo
                          ? null
                          : collection.collectionInfo.location
                          ? collection.collectionInfo.location.toUpperCase()
                          : null}
                        ,{" "}
                        {this.getInterests(collection.collectionInfo.interests)}
                        , Price:{" "}
                        {this.getPrice(collection.collectionInfo.price)},
                        Intimacy: {collection.collectionInfo.intimacy},
                        Adventure: {collection.collectionInfo.adventurous}
                      </div>
                    )}
                  </div>

                  <Link
                    className="similar-date"
                    to={{
                      pathname: "/date/browse",
                      state: {
                        // user: this.props.currentUser.id,
                        searchParams: collection.yelpInfo.searchParams,
                        conditions: {
                          age: collection.collectionInfo.age === 1? true : false,
                          location: collection.collectionInfo.location,
                          price: collection.collectionInfo.price
                        },
                        intimacy: collection.collectionInfo.intimacy,
                        adventurous: collection.collectionInfo.adventurous,
                        interests: collection.collectionInfo.interests
                      }
                    }}
                  >
                    {" "}
                    Generate a similar date >
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : null;

    return (
      <main className="home ">
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
          </div>

          <div className="dash-display-container">
            <div className="dash-titlebar">
              <section className="titlebar-text">
                <h3>Welcome back, {this.getName(this.props.currentUser.name)}</h3>
                  <p>Your recently saved dates:</p>
              </section>
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

              <Link id="easy-night-out" className="mood-box" to={{
                pathname: "/date/browse",
                state: { 
                    searchParams: "usedbooks,movietheatres,tapas,paintandsip,lakes,museums,aquariums",
                    conditions: {
                      age: false,
                      location: "San Francisco",
                      price: "1,2"
                    }
                }
              }}>Easy Night Out</Link>

              <Link id="adrenaline-rush" className="mood-box" to={{
                pathname: "/date/browse",
                state: {
                  searchParams: "bungeejumping,gun_ranges,challengecourses,skydiving,axethrowing",
                  conditions: {
                    age: false,
                    location: "San Francisco",
                    price: "1,2,3,4"
                  }
                }
              }}>Adrenaline Rush</Link>

              <Link id="feelin-fancy" className="mood-box" to={{
                pathname: "/date/browse",
                state: { 
                  searchParams: "winetastingroom,cheesetastingclasses,winetasteclasses,fondue",
                  conditions: {
                    age: false,
                    location: "San Francisco",
                    price: 4
                  }
                }
              }}>Feelin' Fancy</Link>


              <Link id="artistic" className="mood-box" to={{
                pathname: "/date/browse",
                state: {
                  searchParams: "artclasses,photoclasses,dancestudio",
                  conditions: {
                    age: false,
                    location: "San Francisco",
                    price: "2,3"
                  }
                }
              }}>Artistic</Link>

              <Link id="lets-get-weird" className="mood-box" to={{
                pathname: "/date/browse",
                state: {
                  searchParams: "psychic_astrology,axethrowing,cabarets,stripclubs",
                  conditions: {
                    age: false,
                    location: "San Francisco",
                    price: 2
                  }
                }
              }}>Let's Get Weird</Link>

              <Link id="mystery" className="mood-box" to={{
                pathname: "/date/browse",
                state: { 
                  searchParams: "popuprestaurants,streetvendors,comedyclubs,escapegames,mini_golf,planetarium,virtualrealitycenters,popupshops",
                  conditions: {
                    age: false,
                    location: "San Francisco",
                    price: "1,2,3"
                  }
                }
              }}>Mystery</Link>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;