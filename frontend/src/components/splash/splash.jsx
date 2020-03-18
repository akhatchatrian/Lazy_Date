import React from "react";

import "../../assets/stylesheets/splash/splash.css";

class Splash extends React.Component {
    render() {
        return (
            <main className="main-bg">
                <section className="header-container">
                    <div className="signup-form-box">
                        {/* <SignupFormContainer /> */}
                    </div>
                </section>
                <header className="hiw-container">
                    <h2 className="hiw-title">How It Works</h2>
                    <div className="hiw-banner">
                        <div className="hiw-box">
                            <p>Tell us you and your date's interests</p>
                            <img src="../../assets/images/undraw_interests.png"/>
                        </div>
                        <div className="hiw-box">
                            <p>Generate a list of great date ideas</p>
                            <img src="../../assets/images/undraw_list.png"/>
                        </div>
                        <div className="hiw-box">
                            <p>Go on an unforgettable date!</p>
                            <img src="/assets/undraw_date"/>
                        </div>
                    </div>
                </header>
            </main>
        )
    }
}
export default Splash;