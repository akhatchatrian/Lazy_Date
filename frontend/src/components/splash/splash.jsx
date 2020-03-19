import React from "react";
import SignupFormContainer from '../../components/login_signup/signup_form_container';
import "../../assets/stylesheets/splash/splash.css";
import Footer from "../footer";

class Splash extends React.Component {

    componentDidMount() {
        this.props.yelpSearch();
    }

    render() {
        return (
          <main className="main-bg" onClick={this.props.clearErrors}>
            <section className="header-container">
              <div className="signup-form-box">
                {this.props.loggedIn ? (
                  //   <WelcomeMessage />
                  <p>hello current user</p>
                ) : (
                  <SignupFormContainer />
                )}
              </div>
              <div className="slogan-box">
                <p>You know who.</p>
                <p>We know where.</p>
              </div>
            </section>
            <header className="hiw-container">
              <h2 className="hiw-title">How It Works</h2>
              <div className="hiw-banner">
                <div className="hiw-box">
                  <p>Tell us you and your date's interests</p>
                  <div className="hiw-img-1"></div>
                </div>
                <div className="hiw-box">
                  <p>Generate a list of great date ideas</p>
                  <div className="hiw-img-2"></div>
                </div>
                <div className="hiw-box">
                  <p>Go on an unforgettable date!</p>
                  <div className="hiw-img-3"></div>
                </div>
              </div>
            </header>
            <Footer />
          </main>
        );
    }
}
export default Splash;