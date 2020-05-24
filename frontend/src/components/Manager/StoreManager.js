import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './StoreManager.css'

export class StoreManager extends Component {

    constructor(props) {
        super(props)
        this.state = {
            managername: []
        }
    }

    async componentDidMount() {
        return fetch('http://localhost:5000/manager')
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    managername: responseJson
                },
                    function () { }
                );
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {

        return (

            <div className={"container"}>
                <br></br>
                <Link to="/signup">
                    <button className="btn btn-info ml-2 mr-5">
                        <i className="fa fa-arrow-left"></i>&nbsp;
                     Back to Store Managers
                    </button>
                </Link>
                <Link to="/manageredit">
                    <button className='btn btn-info mr-1'><i className="fa fa-edit"></i>&nbsp;Update/Delete</button>
                </Link>
                <br></br>
                <br></br>
                <div className={"justify-content-center"} >
                    <h1 className='rr'><i class="fa fa-users" aria-hidden="true"></i>&nbsp;Store Managers</h1>
                </div>

                <br></br>
                <br></br>


                {this.state.managername.map((value, key) => (



                    <div className="col mb-5 ">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="g">{value.managerName}</h3>
                                <h3 className="g">{value.companyName}</h3>
                                <h3 className="g">{value.managerEmail}</h3>
                                <h3 className="g">{value.password}</h3>
                            </div>
                        </div>

                    </div>

                ))}

            </div>

        )
    }
}

export default StoreManager
