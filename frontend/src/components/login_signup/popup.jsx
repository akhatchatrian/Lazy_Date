import React from 'react';
// import { Link } from 'react-router-dom';
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
        // this.toggleFormType = this.toggleFormType.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors()
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

    // toggleFormType() {
    //     (this.state.formType === 'Log in') ?
    //         (this.setState({
    //             formType: 'Sign up'
    //         })) : (
    //             (this.setState({
    //                 formType: 'Log in'
    //             }))
    //         )
    // }

    closePopup() {
        this.props.closePopup()
        this.props.clearErrors()
    }

    
    render() {
        // const {closePopup} = this.props;

        // const display = this.state.formType === 'Log in' ? (
        //         <div>
        //             <LoginFormContainer formType={this.state.formType} closePopup={this.closePopUp}/>
        //         </div>
        //     ) : (
        //         <div>
        //             <SignupFormContainer formType={this.state.formType} closePopup={this.closePopUp}/>
        //         </div>
        //     );            
            
        return (

            <div className="popup">
                <div className={this.state.showOverlay} onClick={this.closePopup}></div>
                
                <div className="popup-inner">
                    <div className='popup-topline'>
                        <p className='form-name'>Log in</p>
                    </div>
                    <LoginFormContainer formType={this.state.formType} closePopup={this.closePopUp} />
                    {/* <button onClick={closePopup} onClick={this.toggleOverlay}>Close</button> */}
                </div>
            </div>
           
        )
    }
}


export default Popup;