import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../assets/stylesheets/navbar/session_forms.css';

// import ErrorList from '../error_list';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.loginDemoUser = this.loginDemoUser.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value});
        };
    }

    // loginDemoUser(){
    //     this.setState({
    //         email: 'DemoUser',
    //         password: '123456'
    //     })
    // }

    render() {
        const required = (
            <span className="required">*</span>
        )


       const firstName = (
           this.props.formType === 'Sign up' ? (
            <div className="field">
                   <label className='field-label firstname-label'>First name {this.props.formType === 'Sign up' ? required : null} 
                        <input className='form-field' type="text" onChange={this.handleInput('username')} placeholder="Please enter first name" />
               </label>
            </div >

           ) : null
       )

       const {errors} = this.props;
    
        return (
            <div>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <div className='session-errors'>
                        <ul>
                            {/* <ErrorList errors={this.props.errors} /> */}
                            {/* {errors.map((error, idx) => <li key={idx}>{error}</li>)} */}
                            {errors === undefined ? null : errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                    </div>


                    <div className="field">
                        <label className='field-label email-label'>Email address {this.props.formType === 'Sign up' ? required : null} 
                            <input className='form-field' type="text" onChange={this.handleInput('email')} placeholder="Please enter email" />
                        </label>
                    </div>
                    {firstName}
                
                    <div className="field">
                        <label className='field-label password-label'>Password {this.props.formType === 'Sign up' ? required : null} 
                            <input className='form-field' type="password" onChange={this.handleInput('password')} placeholder="Pleaes enter password" />
                        </label>
                    </div>

                    <div className='form-field-btns'>
                        <button className="signin-register-btn">{(this.props.formType) === 'Sign up' ? 'Register' : 'Log in'}</button>
                        
                        {/*only shows demo user button on login form */}
                        {this.props.formType === 'Log in' ? <button className="demo-user-btn" onClick={this.loginDemoUser}>Demo User</button> : null}
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;
