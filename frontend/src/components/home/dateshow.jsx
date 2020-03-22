import React from "react";
import DateCarousel from './date_carousel.jsx';

class DateShow extends React.Component {

    constructor(props) {
        super(props)
        this.formData = this.props.location.state; //Object from DateSearchForm containing yelpInfo and collectionInfo keys.

    }


    deepMind() {
        const results = this.props.yelpData.businesses
        results.sort((venue1 , venue2) => {
            // Laplace's Rule of Succession
            let smartRating1 = (venue1.rating * venue1.review_count + 6) / (venue1.review_count + 2);
            let smartRating2 = (venue2.rating * venue2.review_count + 6) / (venue2.review_count + 2);
            return smartRating2 - smartRating1;
        })
        

        return results.slice(0, 5);
    }

    render() {
        if (!this.props.yelpData || Object.values(this.props.yelpData).length === 0) {
            return null
        }

        // const businesses = this.props.yelpData.businesses;
        const businesses = this.deepMind();
       

        // return (
        //   <div className="date-show-container">
        //     {businesses.length === 0 ? (
        //       <div className='no-results-container'>
        //           <p>Sorry, date could not be generated with your selected options</p>
        //           <p>Please try again with different parameters.</p>
        //           <a href="#/date"><button class="create-date-btn">Create a new Date</button></a>
        //       </div>
        //     ) : (
        //       <DateCarousel dates={businesses} />
        //     )}

        //     {/* {this.deepMind()} */}
        //   </div>
        // );
        return(
            <div className='date-show-container'>
                {/* <div>Here be the Date Show page</div> */}
                <DateCarousel 
                        currentUser={this.props.currentUser}
                        userUpdate={this.props.userUpdate}
                        formData={this.formData}
                        createDateCollection={this.props.createDateCollection} 
                        yelpData={this.props.yelpData} 
                        dates={this.deepMind()} 
                        // dates={businesses}
                    /> 
            </div>
        )
        // return (
        //   <div className="date-show-container">
        //     {businesses.length === 0 || businesses === undefined ? (
        //       <div className='no-results-container'>
        //           <p>Sorry, date could not be generated with your selected options</p>
        //           <p>Please try again with different parameters.</p>
        //           <a href="#/date"><button class="create-date-btn">Create a new Date</button></a>
        //       </div>
        //     ) : (
        //       <DateCarousel dates={businesses} />
        //     )}

        //     {/* {this.deepMind()} */}
        //   </div>
        // );
    }

}

export default DateShow;