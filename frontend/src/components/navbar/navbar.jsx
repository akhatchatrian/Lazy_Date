import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import Popup from '../signin_signup/popup';


class Navbar extends React.Component {
    constructor(props) {
        super(props);


        this.state = { showPopup: false };
        this.togglePopup = this.togglePopup.bind(this);
        this.signOutAndClear = this.signOutAndClear.bind(this);
        this.redirectToHome = this.redirectToHome.bind(this);
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    signOutAndClear() {
        this.props.signOut();
        this.setState({ showPopup: false })
    }

    // redirectToHome() {
    //     this.props.history.push('/')
    // }

    render() {
        // window.scrollTo(0, 0);

        const { currentUserId, signOut, signIn, clearErrors } = this.props;

        const loginLogout = currentUserId ? (
            <div>
                <p className="signin-signout" onClick={this.signOutAndClear}>Sign out</p>
                <p>User Profile </p>
            </div>
        ) : (
                <div>
                    <p className="signin-signout" onClick={this.togglePopup}>Sign in</p>

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
                <div className="navbar-inner" id='inner' >
                    {loginLogout}

                </div>
            </div>
        )
    }
}

// export default Navbar;
export default withRouter(Navbar);
