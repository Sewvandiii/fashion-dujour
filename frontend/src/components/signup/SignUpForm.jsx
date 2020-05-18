import React, { Component } from 'react'
import './signupStyles.css'


class SignUpForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      adminname: '',
      companyname: '',
      email: '',
      pw: '',
      confpw: ''
    }
  }

  inputChangeHandler = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  formSubmitHandler = e => {
    if(this.state.pw !== this.state.confpw){
      alert("Password Mismatch!")
      return
    }
    alert(JSON.stringify(this.state))
  }

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
              name='adminname'
              className='form-control'
              value={this.state.adminname}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Company Name</label>
            <input
              type='text'
              onChange={this.inputChangeHandler}
              name='companyname'
              className='form-control'
              value={this.state.companyname}
              aria-describedby='emailHelp'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Store Manager Email</label>
            <input
              name='email'
              type='email'
              onChange={this.inputChangeHandler}
              className='form-control'
              value={this.state.email}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              type='password'
              name='pw'
              onChange={this.inputChangeHandler}
              className='form-control'
              id='exampleInputPassword1'
              value={this.state.pw}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Confirm Password</label>
            <input
              name='confpw'
              type='password'
              onChange={this.inputChangeHandler}
              className='form-control'
              id='exampleInputPassword1'
              value={this.state.confpw}
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
