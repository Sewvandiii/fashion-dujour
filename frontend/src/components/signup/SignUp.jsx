import React, { Component } from 'react'
import SignUpForm from './SignUpForm'
import './signupStyles.css'
import { Link } from 'react-router-dom'

class SignUp extends Component {
  render() {
    return (

      <div className='e'>
        <br></br>
        <Link to="/dashboard">
          <button className="btn btn-info ml-2 mr-5">
            <i className="fa fa-arrow-left"></i>&nbsp;
        Back to Dashboard
      </button>
        </Link>
        <div className='signup-main mt-1 mb-3 p-'>

          <br></br>
          <div className='signup-box-form'>
            <SignUpForm />
          </div>
          <div className='signup-box-name'>

            <h1 className='title-text'><i class="fa fa-users" aria-hidden="true"></i>&nbsp;STORE MANAGER</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
