import React from "react";
import DateCarousel from './date_carousel.jsx';
import { Link } from "react-router-dom";


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
        // this.props.getDateCollection(this.props.currentUser.id)
    }

    componentWillUpdate(){
        // this.props.yelpSearch(this.props.session.sessionDate)
    }

    deepMind() {
        const results = this.props.yelpData.businesses
        // debugger
        results.sort((venue1 , venue2) => {
            // Laplace's Rule of Succession
            let smartRating1 = (venue1.rating * venue1.review_count + 6) / (venue1.review_count + 2);
            let smartRating2 = (venue2.rating * venue2.review_count + 6) / (venue2.review_count + 2);
            return smartRating1 - smartRating2;
        })

        return results;
    }

    render() {
        if (!this.props.yelpData) return null;
        const businesses = this.props.yelpData.businesses;
        if (!businesses) return null;

        return (
          <div className="date-show-container">
            {businesses.length === 0 ? (
              <div className='no-results-container'>
                  <p>Sorry, date could not be generated with your selected options</p>
                  <p>Please try again with different parameters.</p>
                  <a href="#/date"><button class="create-date-btn">Create a new Date</button></a>
              </div>
            ) : (
              <DateCarousel dates={businesses} />
            )}

            {/* {this.deepMind()} */}
          </div>
        );
    }

}

export default DateShow;