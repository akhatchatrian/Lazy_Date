import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../assets/stylesheets/navbar/login_form.css';


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
        const user = Object.assign({},{ email: this.state.email, password: this.state.password });
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

        const emailErrors = this.props.errors.email;
        const passwordErrors = this.props.errors.password;
        const isLoginError = this.props.errors.type === 'login';
    
        // const errors = this.props.errors.errorType === login ? this.props.errors : undefined;
 
        return (
          <div>
            <form className="login-form" onSubmit={this.handleSubmit}>
    
              <div className="field">
                <label className="field-label email-label"> Email address
                  <input
                    className="form-field"
                    id={(emailErrors && isLoginError) ? "red-border" : ""}
                    type="text"
                    onChange={this.handleInput("email")}
                    placeholder="Please enter email"
                  />
                  <div className="error-text">
                    {emailErrors === undefined ? null : !isLoginError ? null : emailErrors}
                  </div>
                </label>
              </div>

              <div className="field">
                <label className="field-label password-label">
                  Password
                  <input
                    className="form-field"
                    id={(passwordErrors && isLoginError)? "red-border" : ""}
                    type="password"
                    onChange={this.handleInput("password")}
                    placeholder="Please enter password"
                  />
                  <div className="error-text">
                    {passwordErrors === undefined ? null : !isLoginError ? null : passwordErrors}
                  </div>
                </label>
              </div>

              <div className="form-field-btns">
                <button className="signin-register-btn">Log in</button>

                {/*only shows demo user button on login form */}
                {this.props.formType === "Log in" ? (
                  <button
                    className="demo-user-btn"
                    onClick={this.loginDemoUser}>
                    Demo User
                  </button>
                ) : null}
              </div>
            </form>
          </div>
        );
    }
}

export default LoginForm;
