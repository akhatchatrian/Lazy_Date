import React from 'react';
import '../../assets/stylesheets/date_show/date_carousel_sidebar.css';
import '../../assets/stylesheets/date_show/date_carousel_main.css';


class DateCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: this.props.dates,
            prevDateIdx: null,
            currentDateIdx: 0,
            hoverIdx: null
        }

        this.changeMainDate = this.changeMainDate.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleMouseIn = this.handleMouseEnter.bind(this);
        this.handleMouseOut = this.handleMouseLeave.bind(this);
    }

    // componentDidMount() {
    //     this.setState({currentDateIdx: 0})
    // }

    componentDidUpdate(){
        if (!this.state.dates) this.setState({dates: this.props.dates})
        // document.getElementById(`${this.state.currentDateIdx}`).classList.add("active-listing");
    }

    changeMainDate(idx) {
        // if (!this.state.currentDateIdx) {
            document.getElementById(`${this.state.currentDateIdx}`).classList.remove("active-listing");
            document.getElementById(`${idx}`).classList.add("active-listing");
        // }

        this.setState({ prevDateIdx: this.state.currentDateIdx, currentDateIdx: idx });
    }

    handleClick(e) {
        // e.preventDefault();
        // document.getElementById(`${this.state.currentDateIdx}`).classList.remove("active-listing");
        this.changeMainDate(e.currentTarget.id);
    }

    handleMouseEnter(e) {
        // e.preventDefault();
        if (this.state.hoverIdx) document.getElementById(`${this.state.hoverIdx}`).classList.remove("end-animation");

        this.setState({ hoverIdx: e.currentTarget.id });
        document.getElementById(`${e.currentTarget.id}`).classList.add("start-animation");

    }

    handleMouseLeave(e) {
        // e.preventDefault();
        document.getElementById(`${this.state.hoverIdx}`).classList.remove("start-animation");
        document.getElementById(`${this.state.hoverIdx}`).classList.add("end-animation");
        // document.getElementById(`${this.state.hoverIdx}`).classList.remove("end-animation");

    }

    handleNext() {
        let newDateIdx = ((this.state.currentDateIdx + 1) % this.state.dates.length);
        this.changeMainDate(newDateIdx);
    }

    handlePrevious() {
        let newDateIdx = (this.state.currentDateIdx + this.state.dates.length - 1) % this.state.dates.length;
        this.changeMainDate(newDateIdx);
    }

    getStars(rating, reviewCount) {
        if (!rating || !reviewCount) return null;

        const star = <i className="fas fa-star"></i>;
        const halfstar = <i className="fas fa-star-half"></i>;
        
        let stars = []
        for (let i = 0; i < rating-1; i++) {
            stars.push(star)
        }

        if (!Number.isInteger(rating)) stars.push(halfstar);
        
        return (<div className='star-rating'>{stars} ({reviewCount})</div>)
    }

    getDollars(price) {
        const dollarColor = <i className="fas dollar-color fa-dollar-sign"></i>;
        const dollarGray = <i className="fas dollar-gray fa-dollar-sign"></i>;
        const priceArr = price.split("")
        let dollars = []

        for (let i = 0; i < priceArr.length; i++) {
          dollars.push(dollarColor);
        }

        if (dollars.length < 4) {
            for (let i = 0; i < 4-priceArr.length; i++) {
                dollars.push(dollarGray);
            }
        }

       return (<div className='dollars-rating'>{dollars}</div>)
    }

    
    render() {
        const { dates } = this.props;
        const currentDate = dates[this.state.currentDateIdx];
        
        if (!dates || !currentDate) return null;
        
        const catTitles = currentDate.categories.map((cat, idx) => {
            
            if (idx !== currentDate.categories.length-1) {
              return cat.title + ", ";
            } else {
                return cat.title;
            }
        }).join("")

        if (!catTitles) return null;


        return (
          <div className="date-carousel">
            <div className="date-main-container">
              <div className="date-main-header">
                <h3>{currentDate.name}</h3>
                <p>{currentDate.categories[0].title}</p>
                {this.getStars(currentDate.rating, currentDate.review_count)}
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

                <div className="date-main-img">
                  <img src={currentDate.image_url} />
                </div>
              </div>

              <div className="date-detailed-info">
                <h3 className="detail-name">{currentDate.name}</h3>
                <p className="detail-cats">{catTitles}</p>
                <p className="detail-price">{this.getDollars(currentDate.price)}</p>
                <p className="detail-rating">{currentDate.rating}</p>
                <p className="detail-phone">{currentDate.display_phone}</p>

                <div className="date-address">
                  <p>{currentDate.location.address1}</p>
                  <p>{currentDate.location.city}</p>
                  <p>{currentDate.location.zip_code}</p>
                </div>
              </div>
            </div>

            <div className="date-list-sidebar">
                <h3>Your Results:</h3>
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