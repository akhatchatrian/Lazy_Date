import React from 'react';
import { withRouter } from 'react-router-dom'; // temp removed Link and Redirect to avoid warnings
import Popup from '../login_signup/popup'
import '../../assets/stylesheets/navbar/navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showPopup: false };
        this.togglePopup = this.togglePopup.bind(this);
        this.logOutAndClear = this.logOutAndClear.bind(this);
        // this.redirectToHome = this.redirectToHome.bind(this);
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
        this.props.clearErrors()
    }

    logOutAndClear() {
        this.props.logout();
        this.setState({ showPopup: false })
    }

    // redirectToHome() {
    //     this.props.history.push('/')
    // }

    render() {
        // window.scrollTo(0, 0);
        
        const { loggedIn, clearErrors } = this.props; // Temp removed login, logout for warnings

        const loginLogoutDisplay = loggedIn ? (
          <div className="navbar-right-loggedin">
            <p>Welcome back, {this.props.currentUser.name.slice(0, 1).toUpperCase() + this.props.currentUser.name.slice(1).toLowerCase()}!</p>
            <p className="user-profile-btn">User Profile </p>
            <p className="login-logout-btn" onClick={this.logOutAndClear}>
              Log out
            </p>
          </div>
        ) : (
          <div className="navbar-right-loggedout">
            <p className="login-logout-btn" onClick={this.togglePopup}>
              Log in
            </p>

            {this.state.showPopup ? (
              <Popup
                text="hello"
                closePopup={this.togglePopup}
                // currentUser={currentUserId}
                clearErrors={clearErrors}
              />
            ) : null}
          </div>
        );

        return (
          <div className="navbar">
               {!loggedIn ? (
            <div className='navbar-transparent'>
                <img className='logo' src="https://lazydate-store.s3-us-west-1.amazonaws.com/lazydate-transparent-white.png" />
                {loginLogoutDisplay}
              </div>
            ) : (
                <div className='navbar-reg'>
                  <img className='logo' src="https://lazydate-store.s3-us-west-1.amazonaws.com/lazydate-transparent-white.png" /> 
                {/* onClick={this.redirectToHome} */}
                {loginLogoutDisplay}
              </div>
            )}
          </div>
        );
    }
}

export default withRouter(Navbar);