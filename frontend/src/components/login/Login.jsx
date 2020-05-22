import React, { Component } from 'react'
import './loginStyles.css'
import { fakeAuth } from "./MyHome"
import swal from 'sweetalert';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  //validate from backend
  onSubmitHandler = () => {
    alert(JSON.stringify(this.state))
  }

  onChangeHandler = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value

    })
  }

  onClickLoginFn = () => {
    if (this.state.email === "admin@gmail.com" && this.state.password === "123") {

      //////////////////
      console.log("onClickLoginFn called");
      fakeAuth.isAuthenticated = true;
      this.setState({
        ...this.state.loginFunction
      }, this.props.loginFunc)
      /////////////////  
      swal("Logged in successfully!", "No warnings!", "success");
    }

  }


  render() {
    return (
      <div className='login-parent'>
        <div className='login-name'>
          <h1 className='title-login'>LOGIN</h1>
        </div>
        <div className='login-form'>
          <form onSubmit={this.onSubmitHandler}>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Admin Email</label>
              <input
                name='email'
                onChange={this.onChangeHandler}
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                value={this.state.email}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Admin Password</label>
              <input
                name='password'
                onChange={this.onChangeHandler}
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                value={this.state.password}
                required
              />
            </div>

            <button type='button' className='submit-button' onClick={() => this.onClickLoginFn()}>
              Login
            </button>

          </form>
        </div>
      </div>
    )
  }
}

export default Login
