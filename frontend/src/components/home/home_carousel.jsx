import React from 'react'
import '../../assets/stylesheets/home/home_carousel.css'
import {getStars, getDollars} from './date_carousel';

class HomeCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: null,
      prevDateIdx: null,
      currentDateIdx: 0
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.changeMainDate = this.changeMainDate.bind(this);
  }

  componentDidMount(){
    this.setState({dates: this.props.dates, currentDateIdx: this.props.currentDateIdx})
    // this.setState({currentDateIdx: this.props.currentDateIdx})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentDateIdx !== this.props.currentDateIdx) {
      this.setState({ currentDateIdx: this.props.currentDateIdx });
    }

  }

  componentWillReceiveProps(nextProps){
    if (this.state.dates !== nextProps.dates) {
      this.setState({ dates: nextProps.dates})
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

  handleNext() {
    debugger
    let newDateIdx = (this.state.currentDateIdx + 1) % this.state.dates.length;
    this.changeMainDate(newDateIdx);
  }

  handlePrevious() {
    debugger
    let newDateIdx =
      (this.state.currentDateIdx + this.state.dates.length - 1) %
      this.state.dates.length;
    this.changeMainDate(newDateIdx);
  }

  render() {
    if (!this.props.dates || !this.state.dates) return null;
    
    // const {currentDateIdx} = this.props;
    // const getStars = DateCarousel.getStars.bind(this);
    // const getDollars = DateCarousel.getDollars.bind(this);
    // const handleNext = DateCarousel.handleNext.bind(this);
    // const handlePrevious = DateCarousel.handlePrevious.bind(this);
    const currentDate = this.state.dates[this.state.currentDateIdx];
    if (!currentDate) return null;
    
    return (
      <div className="home-carousel">
        <div className="hc-img-container">
          <div className="arrow-icons">
            <div className="home-left-arrow-icon" onClick={this.handlePrevious}>
              <i className="fas fa-chevron-left"></i>
              {/* <button>Previous</button> */}
            </div>

            <div className="home-right-arrow-icon" onClick={this.handleNext}>
              <i className="fas fa-chevron-right"></i>
              {/* <button>Next</button> */}
            </div>
          </div>

          <img src={currentDate.image_url} alt="" />
        </div>

        <div className="hc-detailed-info">
          <div className="hc-main-header">
            <h3>{currentDate.name}</h3>
            <p>{currentDate.categories[0].title}</p>
              <div className="hc-date-address">
                <h3>Location:</h3>
                <p>{currentDate.location.address1}</p>
                <p>{currentDate.location.city}</p>
                <p>{currentDate.location.zip_code}</p>
              </div>

                <p className='hc-phone'>{currentDate.display_phone}</p>

            {currentDate.rating ? (
              <div className="star-rating">
                {" "}
                {/* {this.getStars(currentDate.rating)} ({currentDate.review_count}) */}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCarousel;