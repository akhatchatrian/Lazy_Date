import React from "react";
import SignupFormContainer from '../../components/login_signup/signup_form_container';
import "../../assets/stylesheets/splash/splash.css";

class Splash extends React.Component {
    render() {
        return (
          <main className="main-bg">
            <section className="header-container">
              <div className="signup-form-box">
                {this.props.loggedIn ? (
                  //   <WelcomeMessage />
                  <p>hello current user</p>
                ) : (
                  <SignupFormContainer />
                )}
              </div>
             
            </section>
            <div className="slogan-box">
              <h2>Dating made easy</h2>
            </div>
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
            <div className='why-container'>
              <div className="why-img-1"></div>
              <div className='why-text'>
                  <h1 className='why-title'>Why LazyDate?</h1>
                <p>
                  Finding a compatible partner using modern dating apps is easier than ever.
                  However, creating an original and enjoyable date night is becoming more and
                  more difficult given the overwhelming choice of restaurant, movie and activity
                  options available to people through apps such as Yelp and Eventbrite. Lazy Date
                  aims to solve this dilemma by providing our users a customized and tailored date
                  experience. By removing the stress of decision making we allow you to focus on
                  the more enjoyable aspects of your night out.
                </p>
            
              
              </div>

            </div>
          </main>
        );
    }
}
export default Splash;