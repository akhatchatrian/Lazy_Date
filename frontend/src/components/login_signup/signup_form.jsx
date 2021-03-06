import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../assets/stylesheets/navbar/signup_form.css';
// import { login } from '../../util/session_api_util';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginAfterRegister = this.loginAfterRegister.bind(this);
    // this.signUpDemoUser = this.signUpDemoUser.bind(this);
  }

  loginAfterRegister() {
    if (!this.props.loggedIn && this.props.errors.length === 0) {
      this.props.login({
        email: this.state.email,
        password: this.state.password
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();

    const user = Object.assign({}, this.state);
    if (this.state.email !== "" && this.state.password !== "") {
      this.props.signup(user).then(this.loginAfterRegister);
    } else {
      this.props.signup(user);
    }
    // this.props.signup(user);
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  signUpDemoUser() {
    const timestamp = Date.now();
    this.setState({
      name: `DemoUser${timestamp}`,
      email: `demoUser@${timestamp}`,
      password: "123456"
    })
    debugger
  }

  render() {
    const required = <span className="required">*</span>;
    const emailErrors = this.props.errors.email;
    const nameErrors = this.props.errors.name;
    const passwordErrors = this.props.errors.password;
    const isSignupError = this.props.errors.type === "signup";

    //    const {errors} = this.props;
    return (
      <div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <label>Sign Up</label>

          <div className="field">
            <label className="field-label firstname-label">
              First name {required}
              <input
                className="form-field"
                id={nameErrors && isSignupError ? "red-border" : ""}
                type="text"
                onChange={this.handleInput("name")}
                placeholder="Please enter first name"
              />
              <div className="error-text">
                {/* {nameErrors} */}
                {nameErrors === undefined
                  ? null
                  : !isSignupError
                  ? null
                  : nameErrors}
              </div>
            </label>
          </div>

          <div className="field">
            <label className="field-label email-label">
              Email address {required}
              <input
                className="form-field"
                id={emailErrors && isSignupError ? "red-border" : ""}
                type="text"
                onChange={this.handleInput("email")}
                placeholder="Please enter email"
              />
              <div className="error-text">
                {/* {emailErrors} */}
                {emailErrors === undefined
                  ? null
                  : !isSignupError
                  ? null
                  : emailErrors}
              </div>
            </label>
          </div>

          <div className="field">
            <label className="field-label password-label">
              Password {required}
              <input
                className="form-field"
                id={passwordErrors && isSignupError ? "red-border" : ""}
                type="password"
                onChange={this.handleInput("password")}
                placeholder="Please enter password"
              />
              <div className="error-text">
                {/* {passwordErrors} */}
                {passwordErrors === undefined
                  ? null
                  : !isSignupError
                  ? null
                  : passwordErrors}
              </div>
            </label>
          </div>

          <div className="form-field-btns">
            <button className="signup-btn">Sign Up</button>
            <button className="demo-signup-btn">
              Demo User
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
