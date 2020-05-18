import React, { Component } from 'react'

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
                <h1>Browse Categories</h1>
                {this.state.categories.map((value, key) => (

                    <div className={"box m-2 md-8 p-3 m-2 bg-dark justify-content-center"} >

                        <div className="row pt-5 pb-5 justify-content-center">

                    
                            <h3 className={"text-white"}>{value.categoryName}</h3>

                        </div>

                    </div>
                ))}

            </div>

        )
    }
}

export default HomePage
