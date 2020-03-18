import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
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

        const { currentUserId, logout, login, clearErrors } = this.props;

        const loginLogoutDisplay = currentUserId ? (
            <div>
                <p className="login-logout-btn" onClick={this.logOutAndClear}>Log out</p>
                <p>User Profile </p>
            </div>
        ) : (
                <div>
                    <p className="login-logout-btn" onClick={this.togglePopup}>Log in</p>

                    {this.state.showPopup ?

                        <Popup
                            text='hello'
                            closePopup={this.togglePopup}
                            currentUser={currentUserId}
                            clearErrors={clearErrors}
                        /> : null
                    }
                </div>
            );


        return (
            <div className="navbar">
                <img src="https://lazydate-store.s3-us-west-1.amazonaws.com/logo-temp.png" alt=""/>
                {loginLogoutDisplay}
            </div>
        )
    }
}

// export default Navbar;
export default withRouter(Navbar);
