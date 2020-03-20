import React from 'react';


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


    render() {
        const { dates } = this.props;

        return (
            <div className='date-carousel'>
                   <div className='date-list-sidebar'>
                    {dates.map((date, idx) => {
                        return (
                            <div className='date-listings-container' id={idx} key={idx} onMouseOver={e => this.handleHover(e)}>
                                <img className='date-listing' src={date.image_urls[0]} />
                            </div>
                        )
                    })}
                </div>


                <div className='date-main-container'>
                    <div className='arrow-icons'>
                        <div className='left-arrow-icon' onClick={this.handlePrevious}>
                            <button>Previous</button>
                        </div>

                        <div className='right-arrow-icon' onClick={this.handleNext}>
                            <button>Previous</button>
                        </div>
                    </div>
                    <img className='date-main' src={this.state.urls[this.state.currentDateIdx]} />
                </div>
            </div>
        )
    }
}

export default DateCarousel;