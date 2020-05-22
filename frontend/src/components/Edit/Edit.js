import React, { Component } from 'react'
import './EditStyles.css'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      catid: '',
      catname: '',
      search: '',
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
      return alert("Please enter an ID")
    }
    fetch('http://localhost:5000/users/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'catid': keyword,
        'catname': ''
      })
    })
      .then(callback => callback.json())
      .then(callbackJson => {
        this.setState({
          catid: callbackJson[0].categoryId,
          catname: callbackJson[0].categoryName
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
    let deleteDoc = this.state.catid;
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
          swal("Category has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      })

    fetch('http://localhost:5000/users/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'catid': deleteDoc,
        'catname': ''
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
      catid: '',
      catname: ''
    })
  }


  update = (e) => {
    let updateDoc = this.state.catid;
    if (updateDoc === '') {
      return alert("Please specify an ID")
    }
    fetch('http://localhost:5000/users/update', {
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
      .then(callback => callback.json())
      .then(callbackJson => {
        swal("Category has been updated!", "No warnings!", "success");
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
          <h1 className='y'>Update/Delete Categories</h1>
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div className='container text-center mt-3'>

          <form onSubmit={this.onSubmitHandler}>
            <div className='form-group'>
              <label className="text-left">Category ID</label>
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
              <button className="btn btn-dark" onClick={this.update}>
                <i className="fa fa-edit"></i>&nbsp;
                Update
              </button>
              <button className="btn btn-dark ml-2" onClick={this.delete}>
                <i className="fa fa-trash"></i>&nbsp;
                Delete
              </button>
              <Link to="/dashboard">
                <button className="btn btn-info ml-2">
                  <i className="fa fa-arrow-left"></i>&nbsp;
                  Back to Dashboard
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

export default Edit
