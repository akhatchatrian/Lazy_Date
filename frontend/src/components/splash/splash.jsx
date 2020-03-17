import React from "react";

import "../../stylesheets/splash.css"

class Splash extends React.Component {
    render() {
        return (
            <main className="main-bg">
                <section>
                    <div className="header-bg"></div>
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