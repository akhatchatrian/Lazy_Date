import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
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

              <div className="field">
                <label className="field-label firstname-label">
                  First name {required}
                  <input
                    className="form-field"
                    id={this.props.errors.name ? "red-border" : ""}
                    type="text"
                    onChange={this.handleInput("name")}
                    placeholder="Please enter first name"
                  />
                  <div className="error-text">
                    {this.props.errors.name === undefined
                      ? null
                      : this.props.errors.name}
                  </div>
                </label>
              </div>

              <div className="field">
                <label className="field-label email-label">
                  Email address {required}
                  <input
                    className="form-field"
                    id={this.props.errors.email ? "red-border" : ""}
                    type="text"
                    onChange={this.handleInput("email")}
                    placeholder="Please enter email"
                  />
                  <div className="error-text">
                    {this.props.errors.email === undefined
                      ? null
                      : this.props.errors.email}
                  </div>
                </label>
              </div>

              <div className="field">
                <label className="field-label password-label">
                  Password {required}
                  <input
                    className="form-field"
                    id={this.props.errors.password ? "red-border" : ""}
                    type="password"
                    onChange={this.handleInput("password")}
                    placeholder="Please enter password"
                  />
                  <div className="error-text">
                    {this.props.errors.password === undefined
                      ? null
                      : this.props.errors.password}
                  </div>
                </label>
              </div>

              <div className="form-field-btns">
                <button className="signup-btn">Sign Up</button>
                <button
                  className="demo-signup-btn"
                  onClick={this.loginDemoUser}
                >
                  Demo User
                </button>
              </div>
            </form>
          </div>
        );
    }
}

export default SignupForm;
