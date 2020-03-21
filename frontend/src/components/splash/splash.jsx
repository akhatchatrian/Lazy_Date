import React from "react";
import SignupFormContainer from '../../components/login_signup/signup_form_container';
import "../../assets/stylesheets/splash/splash.css";
import Footer from "../footer";

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
                  Though meeting people has never been so easy.Dating is still hard. 
                  Like really hard. Especially nowadays. People are busy, they are 
                  lazy, or they’re just plain old clueless. It seems like between 
                  work, family, and friends, it is harder than ever to put the 
                  effort into your dating life that it deserves. Enter LazyDate. 
                  <br>

                  </br>
                  Lazydate was first founded with the hope of solving the 
                  timeless question, “what is the perfect date?”. Now, LazyDate 
                  has become a battle cry for the lazy, busy, clueless, and 
                  simply curious. A loud declaration that everyone deserves the
                   perfect date, even if they don’t know what that is yet.  
                </p>
            
              
              </div>

            </div>
            <Footer />
          </main>
        );
    }
}
export default Splash;