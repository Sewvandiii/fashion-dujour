// eslint-disable
import React, { Component } from 'react'
import './AddStyles.css'
import { Link } from 'react-router-dom'

class Add extends Component {
  constructor (props) {
    super(props)
    this.state = {
      catid: '',
      catname: ''
    }
  }

  onChangeHandler = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  onSubmitHandler = (e) => {
    console.log(this.state.catid);
    console.log(this.state.catname);
    if(this.state.catid == null && this.state.catname == null){
      return alert("Cannot submit empty fields")
    }
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'catid': this.state.catid,
        'catname': this.state.catname
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
      catid: '',
      catname: ''
    })
  }



  render () {
    return (
      <div className='container'>
        <div className='containr text-center'>
          <br></br>
          <br></br>
          <br></br>
          <h1 className='o'>Add Categories</h1>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className='container text-center mt-3'>
          <form onSubmit={this.onSubmitHandler}>
            <div className='form-group'>
              <label className="text-left">Category ID</label>
              <input
                name='catid'
                onChange={this.onChangeHandler}
                type='text'
                className='form-control'
                aria-describedby='emailHelp'
                value={this.state.catid}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Category Name</label>
              <input
                name='catname'
                onChange={this.onChangeHandler}
                type='text'
                className='form-control'
                value={this.state.catname}
                required
              />
            </div>
            <br></br>
          <br></br>
            <div className="form-group">
              <button className="btn btn-success" onClick={this.onSubmitHandler}>
              <i className="fa fa-send"></i>&nbsp;
                Submit
              </button>
              <Link to="/dashboard">
                <button className="btn btn-warning ml-2">
                <i className="fa fa-arrow-left"></i>&nbsp;
                  Back to Dashboard
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Add
