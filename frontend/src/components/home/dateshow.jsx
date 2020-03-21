import React from "react";
import DateCarousel from './date_carousel.jsx';

class DateShow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }

        this.formData = this.props.location.state;
    }

    componentDidMount() {
        // Need to add post request for Date Collections 
        this.props.createDateCollection(this.formData)
        // this.props.yelpSearch(this.formData.yelpInfo)
    }

    deepMind() {
        const results = this.props.yelpData.businesses

        results.sort((biz1 , biz2) => {
            let biz1Rating = biz1.rating;
            let biz2Rating = biz2.rating;
            let biz1Reviews = biz1.review_count;
            let biz2Reviews = biz2.review_count;

            
        })

        return results;
    }

    render() {
        return(
            <div className='date-show-container'>
                <div>Here be the Date Show page</div>
                {/* <DateCarousel props={this.state.yelpData}/> // Not sure what yelp state is called, will update later */}
            </div>
        )
    }

}

export default DateShow;