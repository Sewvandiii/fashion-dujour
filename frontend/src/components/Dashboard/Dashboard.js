import React, { Component } from 'react'
import './DashboardStyles.css'
import { Link } from 'react-router-dom'
import loader from './loader.gif'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      users: []
    }
  }

  async componentDidMount() {
    return fetch('http://localhost:5000/users')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          users: responseJson
        },
          function () { }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="container mt-5">
          <center>
            <img src={loader} alt="loader" />
          </center>
        </div>
      )
    } else {

      return (
        <div className='q'>
          <div className='container'>
            <div className='containr text-center'>
              <br></br>
              <br></br>
              <h1 className='d'>Admin Dashboard</h1>
              <br></br>
              <br></br>
            </div>
            <div>

            </div>
            <br></br>
            <div className='row float-center mt-6 mb-3'>
              <h2 className='mr-4'>Add Store Managers</h2>

              <Link to="/signup">
                <button className="btn btn-dark" type="submit"><i className="fa fa-plus"></i>&nbsp;Add New</button>
              </Link>
            </div>
            <hr></hr>
            <br></br>
            <br></br>
            <div className='row float-center mt-6 mb-3'>
              <h2 className='mr-4'>Categories</h2>
              <Link to="/add">
                <button className='btn btn-dark mr-1'><i className="fa fa-plus"></i>&nbsp;Add New</button>
              </Link>
              <Link to="/edit">
                <button className='btn btn-info mr-1'><i className="fa fa-edit"></i>&nbsp;Edit</button>
              </Link>
              <Link to="/edit">
                <button className='btn btn-dark'><i className="fa fa-trash"></i>&nbsp;Delete</button>
              </Link>

            </div>
            <br></br>
            <div className='container text-center mt-2'>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>&nbsp;Category ID</th>
                    <th scope='col'><i class="fa fa-shopping-basket" aria-hidden="true"></i>&nbsp;Category Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user, key) => (
                    <tr
                      key={key}
                    >
                      <td><i class="fa fa-check-square" aria-hidden="true"></i>&nbsp;{user.categoryId}</td>
                      <td>{user.categoryName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <br></br>


          </div>
        </div>
      )
    }
  }
}

export default Dashboard
