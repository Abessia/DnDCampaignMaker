/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React from 'react';
import Button from '../Components/button.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignup: false,
      username: '',
      password: '',
      passwordConfirmation: '',
      emailAddress: '',
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleUpdates = this.handleUpdates.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.props.validateUser({ username, password });
  }

  handleSignup(event) {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const passwordConfirmation = this.state.passwordConfirmation;
    const emailAddress = this.state.emailAddress;
    if (password === passwordConfirmation) {
      this.props.createUser({ username, password, emailAddress });
    } else {
      console.log('Password Confirmation does not match Password');
    }
  }

  handleUpdates(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    if (this.state.isSignup === false) {
      return (
        <div id="login-page">
          <h3>Please Enter Your Login Information</h3>
          <form id="login-form">
            <p>
              Username:
              <input
                type="text"
                onChange={this.handleUpdates}
                name="username"
                value={this.state.username}
              />
            </p>
            <p>
              Password:
              <input
                type="password"
                onChange={this.handleUpdates}
                name="password"
                value={this.state.password}
              />
            </p>
            <p>
              <Button
                clickHandler={this.handleLogin}
                id="login-page-login-button"
                className="login-page-buttons"
                text="Log In"
              />
              <Button
                clickHandler={() => {
                  this.setState({
                    isSignup: true,
                  });
                }}
                id="login-page-new-user-button"
                className="login-page-buttons"
                text="Create a New User"
              />
            </p>
          </form>
        </div>
      );
    }

    return (
      <div id="signup-page">
        <h3>Please Choose Your Username and Password</h3>
        <form id="login-form">
          <p>
            Choose Username:
            <input
              type="text"
              onChange={this.handleUpdates}
              name="username"
              value={this.state.username}
            />
          </p>
          <p>
            Choose Password:
            <input
              type="password"
              onChange={this.handleUpdates}
              name="password"
              value={this.state.password}
            />
          </p>
          <p>
            Confirm Password:
            <input
              type="password"
              onChange={this.handleUpdates}
              name="passwordConfirmation"
              value={this.state.passwordConfirmation}
            />
          </p>
          <p>
            Email Address:
            <input
              type="text"
              onChange={this.handleUpdates}
              name="emailAddress"
              value={this.state.emailAddress}
            />
          </p>
          <p>
            <Button
              clickHandler={this.handleSignup}
              id="login-page-signup-button"
              className="login-page-buttons"
              text="Create Account"
            />
            <Button
              clickHandler={() => {
                this.setState({
                  isSignup: false,
                });
              }}
              id="login-page-login-return-button"
              className="login-page-buttons"
              text="Return to Log In"
            />
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
