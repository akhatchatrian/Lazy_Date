import React from "react";
import DateCarousel from './date_carousel.jsx';

class DateShow extends React.Component {

    constructor(props) {
        super(props)
        this.formData = this.props.location.state; //Object from DateSearchForm containing yelpInfo and collectionInfo keys.
    }


    deepMind(yelpData) {
        const results = yelpData.businesses
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
        debugger

    
        return(
            <div className='date-show-container'>
                {/* <div>Here be the Date Show page</div> */}
                <DateCarousel 
                        currentUser={this.props.currentUser}
                        userUpdate={this.props.userUpdate}
                        formData={this.formData}
                        createDateCollection={this.props.createDateCollection} 
                        yelpData={this.props.yelpData} 
                        dates={this.deepMind(this.props.yelpData)} 
                    /> 
            </div>
        )
    
    }

}

export default DateShow;