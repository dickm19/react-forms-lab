import React from "react";

class LoginForm extends React.Component {
 
    state = {
      username: "",
      password: "",
      userFilled: false,
      passFilled: false
    };

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value,
      userFilled: true
    })
  }


  handlePasswordChange = event => {
    
    this.setState({
      password: event.target.value,
      passFilled: true
    })
    
  }
  render() {
    return (
      <form onSubmit={this.state.userFilled && this.state.passFilled ? (event) => {
        event.preventDefault()
        
        this.props.handleLogin(event.target.username.value, event.target.password.value)
      } : null}>
        <div>
          <label>
            Username
            <input onChange={this.handleUsernameChange} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handlePasswordChange} id="password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
