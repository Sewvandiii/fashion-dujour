import React, { Component } from 'react'
import './HomePageStyles.css'


export class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: []
        }
    }

    async componentDidMount() {
        return fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    categories: responseJson
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
                <div className={"justify-content-center"} >
                    <h1 className='rr'><i class="fa fa-shopping-basket" aria-hidden="true"></i>&nbsp;Categories</h1>
                </div>
                <br></br>
                <br></br>
                
             
                {this.state.categories.map((value, key) => (


                    // <div className={"box m-2 md-8 p-3 m-3 bg-success justify-content-center"} >

                    // <div className="row pt-5 pb-5 justify-content-center">

                  
                    <div className="col mb-5 ">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="g">{value.categoryName}</h3>

                            </div>
                        </div>

                    </div>

                ))}

            </div>

        )
    }
}

export default HomePage
