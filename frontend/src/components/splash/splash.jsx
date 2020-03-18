import React from "react";

import "../../stylesheets/splash.css"

class Splash extends React.Component {

    componentDidMount() {
        this.props.yelpSearch();
    }

    render() {
        console.log(this.props.yelpData)
        return (
            <main className="main-bg">
                <section>
                    {/* <SignupFormContainer /> */}
                </section>
                <header className="hiw-container">
                    <h2>How It Works</h2>
                    <div className="hiw-banner">
                        <div className="hiw-box">Tell us you and your date's interests</div>
                        <div className="hiw-box">Generate a list of great date ideas</div>
                        <div className="hiw-box">Go on an unforgettable date!</div>
                    </div>
                </header>
            </main>
        )
    }
}
export default Splash;