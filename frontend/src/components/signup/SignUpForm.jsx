import React, { Component } from 'react'
import './signupStyles.css'


class SignUpForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      managerName: '',
      companyName: '',
      managerEmail: '',
      password: '',
      conPassword: '',
    }
  }

  inputChangeHandler = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  
  formSubmitHandler = (e) => {
    console.log(this.state.managerName);
    console.log(this.state.companyName);
    console.log(this.state.managerEmail);
    console.log(this.state.password);
    console.log(this.state.conPassword);
    if(this.state.managerName == null && this.state.companyName == null && this.state.managerEmail == null && this.state.password == null && this.state.conPassword == null){
      return alert("Cannot submit empty fields")
    }
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
    .then(function(callback) {
      console.log(callback.json())
      alert("Submitted Successfully!");
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
  }/////

  // formSubmitHandler = e => {
  //   if(this.state.pw !== this.state.confpw){
  //     alert("Password Mismatch!")
  //     return
  //   }
  //   alert(JSON.stringify(this.state))
  // }

  render () {
    
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
          </div>
          <br></br>
          <button type='submit' className='btn-submit'>
            Submit
          </button>
        </form>
      </div>
      </div>
     
    )
  }
}

export default SignUpForm
