// eslint-disable
import React, { Component } from 'react'
import './AddStyles.css'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

const initialState = {
  catid: '',
  catname: '',
  iderror: '',
  nameerror: ''
}

class Add extends React.Component {

  state = initialState;


  onChangeHandler = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  validate = () => {
    let iderror = "";
    let nameerror = "";

    if (!this.state.catid) {
      iderror = "Enter Category Id";
    }

    if (!this.state.catname) {
      nameerror = "Enter Category Name";
    }

    if (iderror || nameerror) {
      this.setState({ iderror, nameerror });
      return false;
    }
    swal("Category Added Successfully!", "No warnings! ", "success");
    return true;
  };


  onSubmitHandler = (e) => {

    const isValid = this.validate();
    if (isValid) {
      console.log(this.state.catid);
      console.log(this.state.catname);


      //clear form
      this.setState(initialState);
    }



    // if(this.state.catid == null && this.state.catname == null){
    //   return alert("Cannot submit empty fields")
    // }
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
      .then(function (callback) {
        console.log(callback.json())

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



  render() {
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
              <div style={{ fontSize: 12, color: "darkblue" }}>
                {this.state.iderror}
              </div>
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
              <div style={{ fontSize: 12, color: "darkblue" }}>
                {this.state.nameerror}
              </div>
            </div>

            <br></br>
            <br></br>
            <div className="form-group">
              <button className="btn btn-dark" onClick={this.onSubmitHandler}>
                <i className="fa fa-send"></i>&nbsp;
                Submit
              </button>
              <Link to="/dashboard">
                <button className="btn btn-info ml-2">
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
