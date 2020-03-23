import React from 'react';
import '../../assets/stylesheets/date_show/date_carousel_sidebar.css';
import '../../assets/stylesheets/date_show/date_carousel_main.css';
// const MAP_API_KEY =  '../../../../config/keys_prod.js'
const keys = require('../../frontend_config/map_api_key');

class DateCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: this.props.dates,
      prevDateIdx: null,
      currentDateIdx: 0,
      hoverIdx: null,
      collectionName: ""
    };

    this.changeMainDate = this.changeMainDate.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleMouseIn = this.handleMouseEnter.bind(this);
    this.handleMouseOut = this.handleMouseLeave.bind(this);
  }

  // componentDidMount() {
  //     this.setState({currentDateIdx: 0})
  // everythingSubmit() {
  //   this.props.userUpdate(this.state.props.dates)
  //   this.props.createDateCollection(this.props.formData)
  // }

  componentDidUpdate() {
    if (!this.state.dates) this.setState({ dates: this.props.dates });
    // document.getElementById(`${this.state.currentDateIdx}`).classList.add("active-listing");
  }

  changeMainDate(idx) {
    document
      .getElementById(`${this.state.currentDateIdx}`)
      .classList.remove("active-listing");
    document.getElementById(`${idx}`).classList.add("active-listing");

    this.setState({
      prevDateIdx: this.state.currentDateIdx,
      currentDateIdx: idx
    });
  }

  handleClick(e) {
    this.changeMainDate(e.currentTarget.id);
  }

  handleMouseEnter(e) {
    // e.preventDefault();
    if (this.state.hoverIdx)
      document
        .getElementById(`${this.state.hoverIdx}`)
        .classList.remove("end-animation");

    this.setState({ hoverIdx: e.currentTarget.id });
    document
      .getElementById(`${e.currentTarget.id}`)
      .classList.add("start-animation");
  }

  handleMouseLeave(e) {
    document
      .getElementById(`${this.state.hoverIdx}`)
      .classList.remove("start-animation");
    document
      .getElementById(`${this.state.hoverIdx}`)
      .classList.add("end-animation");
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

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  saveCollection(){
    // save current dates + user's collectionName
  }

  getStars(rating) {
    if (!rating) return null;

    const star = <i className="fas fa-star"></i>;
    const halfstar = <i className="fas fa-star-half"></i>;

    let stars = [];
    for (let i = 0; i < rating - 1; i++) {
      stars.push(star);
    }

    if (!Number.isInteger(rating)) stars.push(halfstar);

    return stars;
  }

  getDollars(price) {
    const dollarColor = <i className="fas dollar-color fa-dollar-sign"></i>;
    const dollarGray = <i className="fas dollar-gray fa-dollar-sign"></i>;
    const priceArr = price.split("");
    let dollars = [];

    for (let i = 0; i < priceArr.length; i++) {
      dollars.push(dollarColor);
    }

    if (dollars.length < 4) {
      for (let i = 0; i < 4 - priceArr.length; i++) {
        dollars.push(dollarGray);
      }
    }

    return <div className="dollars-rating">{dollars}</div>;
  }

  getParams(string) {
    const reserved =[	'!', '*', "\'", '(', ')', ';', ':', '@', '&', '=', '+', '$', ',', '/', '?', '%', '#', '[', ']']
    const words = string.split(" ");
    const params = []
    // const params =
    //   words.slice(0, words.length - 1).map(word => word + "+") +
    //   words.slice(words.length - 1);
    words.forEach((word, idx)=> {
      if (idx === words.length-1){
        params.push(word)
      } else if (reserved.includes(word)) {
        params.push("")
      } else {
        params.push(word + '+')
      }
    })
    return params.join("");
  }

  googleMap(currentDate) {
    return (
      <iframe
        frameborder="0"
        src={`https://www.google.com/maps/embed/v1/place?key=${
          keys.MAP_API_KEY
        }&q=
        ${this.getParams(currentDate.name)},
        ${this.getParams(currentDate.location.city)}, 
        ${currentDate.location.zip_code}`}
        allowfullscreen
      ></iframe>
    );
  }

  render() {
    const { dates } = this.props;
    const currentDate = dates[this.state.currentDateIdx];

    if (!dates || !currentDate) return null;

    const catTitles = currentDate.categories
      .map((cat, idx) => {
        if (idx !== currentDate.categories.length - 1) {
          return cat.title + ", ";
        } else {
          return cat.title;
        }
      })
      .join("");

    if (!catTitles) return null;

    return (
      <div className="date-carousel">
        <div className="date-main-container">
          <div className="date-main-header">
            <h3>{currentDate.name}</h3>
            <p>{currentDate.categories[0].title}</p>
            {currentDate.rating ? (
              <div className="star-rating">
                {" "}
                {this.getStars(currentDate.rating)} ({currentDate.review_count})
              </div>
            ) : null}
          </div>

          <div className="date-main-img-container">
            <div className="arrow-icons">
              <div className="left-arrow-icon" onClick={this.handlePrevious}>
                <i className="fas fa-chevron-left"></i>
                {/* <button>Previous</button> */}
              </div>

              <div className="right-arrow-icon" onClick={this.handleNext}>
                <i className="fas fa-chevron-right"></i>
                {/* <button>Next</button> */}
              </div>
            </div>

            <div className="date-main-img">
              <img src={currentDate.image_url} />
            </div>
          </div>

          <div className="date-detailed-info">
            <h3 className="detail-name">{currentDate.name}</h3>
            <p className="detail-cats">{catTitles}</p>
            {currentDate.rating ? (
              <div className="detail-rating">
                {" "}
                {this.getStars(currentDate.rating)}
              </div>
            ) : null}
            <p className="detail-price">{this.getDollars(currentDate.price)}</p>
            <p className="detail-phone">{currentDate.display_phone}</p>

            <div className="date-address">
              <h3>Location:</h3>
              <p>{currentDate.location.address1}</p>
              <p>{currentDate.location.city}</p>
              <p>{currentDate.location.zip_code}</p>
            </div>

            <div className="date-map">
              {currentDate.name && currentDate.location.address1
                ? this.googleMap(currentDate)
                : ""}
            </div>
          </div>
        </div>

        <div className="date-list-sidebar">
          <label>
            <input
              className="collection-field"
              type="text"
              onChange={this.handleInput("collectionName")}
              placeholder="Name your collection!"
            />
            <button onClick={this.saveCollection}>Save collection</button>
          </label>

          <h3>Here are Your Date Results:</h3>
          {dates.map((date, idx) => {
            return (
              <div
                className="date-listing"
                id={idx}
                key={idx}
                onClick={e => this.handleClick(e)}
                onMouseEnter={e => this.handleMouseEnter(e)}
                onMouseLeave={e => this.handleMouseLeave(e)}
              >
                <img className="date-img" src={date.image_url} />
                <div className="date-info-blurb">
                  <h3>{date.name}</h3>
                  <p>{date.categories[0].title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DateCarousel;