import React from "react";
import DateCarousel from './date_carousel.jsx';

class DateShow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }

        this.formData = this.props.location.state; //Object from DateSearchForm containing yelpInfo and collectionInfo keys.
    }

    componentDidMount() {
        // Need to add post request for Date Collections 

        this.props.yelpSearch(this.formData.yelpInfo)
    }

    deepMind() {
        const results = this.props.yelpData.businesses

        results.sort((venue1 , venue2) => {
            // Laplace's Rule of Succession
            let smartRating1 = (venue1.rating * venue1.review_count + 6) / (venue1.review_count + 2);
            let smartRating2 = (venue2.rating * venue2.review_count + 6) / (venue2.review_count + 2);
            return smartRating1 - smartRating2;
        })

        return results;
    }

    render() {
        debugger
        return(
            <div className='date-show-container'>
                <div>Here be the Date Show page</div>
                {/* <DateCarousel props={this.state.yelpData}/> // Not sure what yelp state is called, will update later */}
            </div>
        )
    }

}

export default DateShow;