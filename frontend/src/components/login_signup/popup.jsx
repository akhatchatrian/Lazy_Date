import React from 'react';
import { Link } from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import '../../assets/stylesheets/navbar/popup.css';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            formType: "Log in",
            showOverlay: 'show-popup-overlay'
        }
        this.toggleFormType = this.toggleFormType.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    componentDidUpdate() {
        this.props.clearErrors()
    }

    toggleOverlay() {
        (this.state.show === "show-popup-overlay") ?
            (this.setState({
                showOverlay: "hide-popup-overlay"
            })) : (
                (this.setState({
                    showOverlay: "show-popup-overlay"
                }))
            )
    }

    toggleFormType() {
        (this.state.formType === 'Log in') ?
            (this.setState({
                formType: 'Sign up'
            })) : (
                (this.setState({
                    formType: 'Log in'
                }))
            )
    }

    closePopup() {
        this.props.closePopup()
        // this.props.clearErrors()
    }

    
    render() {
        // const {closePopup} = this.props;

        const display = this.state.formType === 'Log in' ? (
                <div>
                    <LoginFormContainer formType={this.state.formType} closePopup={this.closePopUp}/>
                </div>
            ) : (
                <div>
                    <SignupFormContainer formType={this.state.formType} closePopup={this.closePopUp}/>
                </div>
            );

        // const toggleButton = (this.state.formType === "Log in") ? (
        //     <button className='login-signup-toggle' onClick={this.toggleFormType}>Register</button>
        // ) : (
        //         <button className='login-signup-toggle' onClick={this.toggleFormType}>Log in</button>

        //     )

        const sessionFormHeader = (this.state.formType === "Log in") ? (
            <p className='form-name'>Log in</p>
        ) : (
            <div>
                <p className='form-name'>Create your account</p>
                <p className='form-name-caption'>Registration is easy.</p>
            </div>
        )
            
            
        return (

            <div className="popup">
                <div className={this.state.showOverlay} onClick={this.closePopup}></div>
                
                <div className="popup-inner">
                    <div className='popup-topline'>
                        {sessionFormHeader}
                        {/* {toggleButton} */}
                    </div>

                    {display}
                    {/* <button onClick={closePopup} onClick={this.toggleOverlay}>Close</button> */}
                </div>
            </div>
           
        )
    }
}


export default Popup;