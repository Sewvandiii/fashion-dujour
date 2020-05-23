import React, { Component } from 'react'
import './loginStyles.css'
import { fakeAuth } from "./MyHome"
import swal from 'sweetalert';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adminEmail: '',
      adminPassword: ''
    }
  }

  //validate from backend
  // onSubmitHandler = () => {
  //   alert(JSON.stringify(this.state))
  // }

  onSubmitHandler = (e) => {

    if (this.state.adminEmail == null && this.state.adminPassword == null) {
      return alert("Cannot submit empty fields")
    }
    
    alert(JSON.stringify(this.state))
    fetch('http://localhost:5000/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'adminEmail': this.state.adminEmail,
        'adminPassword': this.state.adminPassword
      })
    })
      .then(function (callback) {
        console.log(callback.json())
        alert("Submitted Successfully!");
      })
      .catch(error => {
        console.log(error)
      })
    e.preventDefault()
    this.setState({
      adminEmail: '',
      adminPassword: ''
    
    })
  }

  onChangeHandler = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value

    })
  }

  onClickLoginFn = () => {
    if (this.state.adminEmail === "admin@gmail.com" && this.state.adminPassword === "123") {

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
              <label htmlFor='exampleInputEmail1' className={"text-white"}>Admin Email</label>
              <input
                name='adminEmail'
                onChange={this.onChangeHandler}
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                value={this.state.adminEmail}
                required
              />
            </div>
            
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1' className={"text-white"}
              >Admin Password</label>
              <input
                name='adminPassword'
                onChange={this.onChangeHandler}
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                value={this.state.adminPassword}
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
