import React, { Component } from 'react'
import './ManagerEdit.css'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

class ManagerEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
        managerName: '',
        companyName: '',
        managerEmail: '',
        password: ''

    }
  }

  onChangeHandler = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  onSubmitHandler = () => {
    alert(JSON.stringify(this.state))
  }

  search = (e) => {
    let keyword = this.state.search;
    if (keyword === '') {
      return alert("Please enter an Email")
    }
    fetch('http://localhost:5000/manager/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'managerEmail': keyword,
        'managerName': '',
        'companyName':'',
        'password':''
      })
    })
      .then(callback => callback.json())
      .then(callbackJson => {
        this.setState({
            managerName: callbackJson[0].managerName,
            companyName: callbackJson[0].companyName,
            managerEmail: callbackJson[0].managerEmail,
            password: callbackJson[0].password
        },
          function () { }
        )
      })
      .catch(error => {
        console.log(error)
      })
    e.preventDefault();
  }

  delete = (e) => {
    let deleteDoc = this.state.managerEmail;
    if (deleteDoc === '') {
      return alert("Specify an entry!")
    }
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Store Manager details has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      })

    fetch('http://localhost:5000/manager/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'managerEmail': deleteDoc,
        'managerName': '',
        'companyName':'',
        'password':''
      })
    })
      .then(callback => callback.json())
      .then(callbackJson => {

      })
      .catch(error => {
        console.log(error)
      })
    e.preventDefault();
    this.setState({
        managerName: '',
        companyName: '',
        managerEmail: '',
        password: ''
    })
  }


  update = (e) => {
    let updateDoc = this.state.managerEmail;
    if (updateDoc === '') {
      return alert("Please specify an Email")
    }
    fetch('http://localhost:5000/manager/update', {
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
      })
    })
      .then(callback => callback.json())
      .then(callbackJson => {
        swal("Store Manager details has been updated!", "No warnings!", "success");
      })
      .catch(error => {
        console.log(error)
      })
    e.preventDefault()
    this.setState({
        managerName: '',
        companyName: '',
        managerEmail: '',
        password: ''
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='containr text-center'>
          <br></br>
          <br></br>
          <br></br>
          <h1 className='y'>Update/Delete Store Manager</h1>
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div className='container text-center mt-3'>

          <form onSubmit={this.onSubmitHandler}>
            <div className='form-group'>
              <label className="text-left"><i class='fa fa-envelope' aria-hidden='true'></i>&nbsp;Manager Email</label>
              <input
                name='search'
                onChange={this.onChangeHandler}
                type='text'
                className='form-control'
                aria-describedby='emailHelp'
                value={this.state.search}
                required
              />
            </div>
            <div className="form-group">
              <button type='submit' className="btn btn-info" onClick={this.search}>
                <i className="fa fa-search"></i> &nbsp;
                Search
              </button>
            </div>
          </form>


          <form onSubmit={this.onSubmitHandler}>
            <div className='form-group'>
              <label className="text-left"><i class='fa fa-envelope' aria-hidden='true'></i>&nbsp;Manager Email</label>
              <input
                name='managerEmail'
                onChange={this.onChangeHandler}
                type='text'
                className='form-control'
                aria-describedby='emailHelp'
                value={this.state.managerEmail}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'><i class='fa fa-user' aria-hidden='true'></i>&nbsp;Manager Name</label>
              <input
                name='managerName'
                onChange={this.onChangeHandler}
                type='text'
                className='form-control'
                value={this.state.managerName}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'><i class='fa fa-building' aria-hidden='true'></i>&nbsp;Company Name</label>
              <input
                name='companyName'
                onChange={this.onChangeHandler}
                type='text'
                className='form-control'
                value={this.state.companyName}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'><i class='fa fa-unlock-alt' aria-hidden='true'></i>
                &nbsp;Password</label>
              <input
                name='password'
                onChange={this.onChangeHandler}
                type='text'
                className='form-control'
                value={this.state.password}
                required
              />
            </div>
            <br></br>
            <br></br>
            <div className="form-group">
              <button className="btn btn-dark" onClick={this.update}>
                <i className="fa fa-edit"></i>&nbsp;
                Update
              </button>
              <button className="btn btn-dark ml-2" onClick={this.delete}>
                <i className="fa fa-trash"></i>&nbsp;
                Delete
              </button>
              <Link to="/manager">
                <button className="btn btn-info ml-2">
                  <i className="fa fa-arrow-left"></i>&nbsp;
                  Store Managers
                </button>
              </Link>
            </div>
          </form>
          <br></br>
          <br></br>
        </div>
      </div>

    )
  }
}

export default ManagerEdit
