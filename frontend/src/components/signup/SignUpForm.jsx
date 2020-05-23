import React, { Component } from 'react'
import './signupStyles.css'
import swal from 'sweetalert';

const initialState = {
  managerName: '',
  companyName: '',
  managerEmail: '',
  password: '',
  conPassword: '',
  mnameerror: '',
  cnameerror: '',
  memailerror: '',
  passworderror: '',
  conpassworderror: ''
}

class SignUpForm extends Component {

  state = initialState;

  inputChangeHandler = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  validate = () => {
    let mnameerror = "";
    let cnameerror = "";
    let memailerror = "";
    let passworderror = "";
    let conpassworderror = "";

    if (!this.state.managerName) {
      mnameerror = "Enter Store Manager Name";
    }

    if (!this.state.companyName) {
      cnameerror = "Enter Company Name";
    }

    if (!this.state.managerEmail.includes("@")) {
      memailerror = "Invalid Email";
    }

    if (!this.state.password) {
      passworderror = "Enter Password";
    }

    if (!this.state.conPassword) {
      conpassworderror = "Confirm Password";
    }

    if (mnameerror || cnameerror || memailerror || passworderror || conpassworderror) {
      this.setState({ mnameerror, cnameerror, memailerror, passworderror, conpassworderror });
      return false;
    }
    swal("Store Manager Added Successfully!", "No warnings! ", "success");
    return true;
  };

  formSubmitHandler = (e) => {
    const isValid = this.validate();
    if (isValid) {
    console.log(this.state.managerName);
    console.log(this.state.companyName);
    console.log(this.state.managerEmail);
    console.log(this.state.password);
    console.log(this.state.conPassword);
      //clear form
      this.setState(initialState);
    }

    if (this.state.managerName == null && this.state.companyName == null && this.state.managerEmail == null && this.state.password == null && this.state.conPassword == null) {
      return alert("Cannot submit empty fields")
    }
    if (this.state.password !== this.state.conPassword) {
      alert("Password Mismatch!")
      return
    }

    alert(JSON.stringify(this.state))
    fetch('http://localhost:5000/manager', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'managerName': this.state.managerName,
        'companyName': this.state.companyName,
        'managerEmail': this.state.managerEmail,
        'password': this.state.password,
        'conPassword': this.state.conPassword,
      })
    })
      .then(function (callback) {
        console.log(callback.json())
        // alert("Submitted Successfully!");
      })
      .catch(error => {
        console.log(error)
      })
    e.preventDefault()
    this.setState({
      managerName: '',
      companyName: '',
      managerEmail: '',
      password: '',
      conPassword: ''
    })
  }

  render() {

    return (

      <div>
        <div className='container'>
          <form onSubmit={this.formSubmitHandler}>

            <div className='form-group'>

              <label>Store Manager Name</label>
              <input
                type='text'
                onChange={this.inputChangeHandler}
                name='managerName'
                className='form-control'
                value={this.state.managerName}
                required
              />
              <div style={{ fontSize: 12, color: "green" }}>
                {this.state.mnameerror}
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Company Name</label>
              <input
                type='text'
                onChange={this.inputChangeHandler}
                name='companyName'
                className='form-control'
                value={this.state.companyName}
                aria-describedby='emailHelp'
                required
              />
              <div style={{ fontSize: 12, color: "green" }}>
                {this.state.cnameerror}
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Store Manager Email</label>
              <input
                name='managerEmail'
                type='email'
                onChange={this.inputChangeHandler}
                className='form-control'
                value={this.state.managerEmail}
                required
              />

            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Password</label>
              <input
                type='password'
                name='password'
                onChange={this.inputChangeHandler}
                className='form-control'
                id='exampleInputPassword1'
                value={this.state.password}
                required
              />
              <div style={{ fontSize: 12, color: "green" }}>
                {this.state.passworderror}
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Confirm Password</label>
              <input
                name='conPassword'
                type='password'
                onChange={this.inputChangeHandler}
                className='form-control'
                id='exampleInputPassword1'
                value={this.state.conPassword}
                required
              />
              <div style={{ fontSize: 12, color: "green" }}>
                {this.state.conpassworderror}
              </div>
            </div>
            <br></br>
          
            <button type='submit' className='btn-submit'>
              Add Store Manager
          </button>
         
          </form>
        </div>
      </div>

    )
  }
}

export default SignUpForm
