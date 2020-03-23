import React from 'react'
import "../../assets/stylesheets/date_show/date_carousel_sidebar.css";

class DateListSidebar extends React.Component {
    render() {
        const {dates} = this.props;
        return (
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
        )
    }
}



export default DateListSidebar;