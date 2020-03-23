import React from 'react'
import '../../assets/stylesheets/home/home_carousel.css'
import DateCarousel from './date_carousel';

class HomeCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   dates: this.props.dates,
    //   prevDateIdx: null
      //   currentDateIdx: 0
    };
  }

//   componentDidUpdate() {
//     if (!this.state.dates) this.setState({ dates: this.props.dates });
//   }

  render() {
    if (!this.props) return null;

    const {currentDateIdx, prevDateIdx, dates, handleNext, handlePrevious} = this.props;
    // const getStars = DateCarousel.getStars.bind(this);
    // const getDollars = DateCarousel.getDollars.bind(this);
    // const handleNext = DateCarousel.handleNext.bind(this);
    // const handlePrevious = DateCarousel.handlePrevious.bind(this);
    const currentDate = dates[currentDateIdx];

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

            <img src={currentDate.image_url} />
        </div>

        
        <div className="hc-detailed-info">
          <div className="hc-main-header">
            <h3>{currentDate.name}</h3>
                        <p>{currentDate.categories[0].title}</p>

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