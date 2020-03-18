import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../assets/stylesheets/navbar/signup_form.css';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.loginDemoUser = this.loginDemoUser.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user)
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



       const {errors} = this.props;
        return (
            <div>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <label>Sign Up</label>

                    <div className='session-errors'>
                        <ul>
                            {/* <ErrorList errors={this.props.errors} /> */}
                            {/* {errors.map((error, idx) => <li key={idx}>{error}</li>)} */}
                            {errors === undefined ? null : Object.values(errors).map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                    </div>



                    <div className="field">
                        <label className='field-label firstname-label'>First name {required}
                            <input className='form-field' type="text" onChange={this.handleInput('name')} placeholder="Please enter first name" />
                        </label>
                    </div >


                    <div className="field">
                        <label className='field-label email-label'>Email address {required} 
                            <input className='form-field' type="text" onChange={this.handleInput('email')} placeholder="Please enter email" />
                        </label>
                    </div>
                    
        
                    <div className="field">
                        <label className='field-label password-label'>Password {required} 
                            <input className='form-field' type="password" onChange={this.handleInput('password')} placeholder="Pleaes enter password" />
                        </label>
                    </div>

                    <div className='form-field-btns'>
                        <button className="signup-btn">Sign Up</button>
                        <button className="demo-signup-btn" onClick={this.loginDemoUser}>Demo User</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupForm;
