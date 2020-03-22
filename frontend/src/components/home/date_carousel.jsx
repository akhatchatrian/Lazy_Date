import React from 'react';
import '../../assets/stylesheets/date_show/date_carousel.css';


class DateCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: this.props.dates,
            currentDateIdx: 0,
        }

        this.changeMainDate = this.changeMainDate.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
    }


    componentDidUpdate(){
        if (!this.state.dates) this.setState({dates: this.props.dates})
    }

    changeMainDate(idx) {
        this.setState({ currentDateIdx: idx });
    }

    handleHover(e) {
        // e.preventDefault();
        this.changeMainDate(e.currentTarget.id);
    }

    handleNext() {
        let newDateIdx = ((this.state.currentDateIdx + 1) % this.state.dates.length);
        this.changeMainDate(newDateIdx);
    }

    handlePrevious() {
        let newDateIdx = (this.state.currentDateIdx + this.state.dates.length - 1) % this.state.dates.length;
        this.changeMainDate(newDateIdx);
    }

    getStars(rating) {
        if (!rating) return null;

        const star = <i className="fas fa-star"></i>;
        const halfstar = <i className="fas fa-star-half"></i>;
        debugger
        let stars = []
        for (let i = 0; i < rating-1; i++) {
            stars.push(star)
        }

        if (!Number.isInteger(rating)) stars.push(halfstar);
        
        return (<div className='star-rating'>{stars}</div>)
    }

    render() {
        const { dates } = this.props;

        if (!dates) return null;

        


        return (
          <div className="date-carousel">
            <div className="date-list-sidebar">
              {dates.map((date, idx) => {
                return (
                  <div
                    className="date-listing"
                    id={idx}
                    key={idx}
                    onMouseOver={e => this.handleHover(e)}
                  >
                    <img className="date-img" src={date.image_url} />
                    <div className="date-info-blurb">
                      <h3>{date.name}</h3>
                      <p>
                        Rating: {date.rating + "  "}({date.review_count}{" "}
                        Reviews)
                      </p>
                      <p>Category: {date.categories[0].title}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="date-main-container">
              <div className="date-main-header">
                <h3>{dates[this.state.currentDateIdx].name}</h3>
                <p>{dates[this.state.currentDateIdx].categories[0].title}</p>
                {this.getStars(dates[this.state.currentDateIdx].rating)}
              </div>
              <div className="date-main-img-container">
                <div className="arrow-icons">
                  <div
                    className="left-arrow-icon"
                    onClick={this.handlePrevious}
                  >
                    <i className="fas fa-chevron-left"></i>
                    {/* <button>Previous</button> */}
                  </div>

                  <div className="right-arrow-icon" onClick={this.handleNext}>
                    <i className="fas fa-chevron-right"></i>
                    {/* <button>Next</button> */}
                  </div>
                </div>
                <img
                  className="date-main-img"
                  src={dates[this.state.currentDateIdx].image_url}
                />
              </div>

              <div className="date-detailed-info">
                <h3>{dates[this.state.currentDateIdx].name}</h3>
                <h3>{dates[this.state.currentDateIdx].categories[0].title}</h3>
                <h3>{dates[this.state.currentDateIdx].price}</h3>
                <h3>{dates[this.state.currentDateIdx].rating}</h3>
              </div>
            </div>
          </div>
        );
    }
}

export default DateCarousel;