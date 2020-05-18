import React, { Component } from 'react'
import Login from './Login'
import SignUp from '../signup/SignUp'
import Navbar from '../Navbar/Navbar'
import Dashboard from '../Dashboard/Dashboard'
import Add from "../Add/Add"
import Edit from '../Edit/Edit'
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory, useLocation } from "react-router-dom";
import HomePage from '../HomePage/HomePage';


export default class MyHome extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>


                        <Route exact path="/" render={() => (
                            <Redirect to="/home" />
                        )} />

                        <Route path="/home" exact component={HomePage}></Route>



                        <PrivateRoute path="/dashboard">
                            <AuthButton />
                            <Dashboard />
                        </PrivateRoute>

                        <PrivateRoute path="/add">
                            <AuthButton />
                            <Add />
                        </PrivateRoute>

                        <PrivateRoute path="/edit">
                            <AuthButton />
                            <Edit />
                        </PrivateRoute>


                        <Route path="/login">

                            <LoginPage />
                        </Route>

                        <Route path="/signup" component={SignUp}></Route>


                    </Switch>
                </div>
            </Router>
        );
    }

}




export const fakeAuth = {

    isAuthenticated: false,

    authenticate(cb) {

        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signOut(cb) {

        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};



function AuthButton() {
    let history = useHistory();

    return fakeAuth.isAuthenticated ? (

        <div className={"row justify-content-center bg-info"}>
            <label className={"text-white"}>You are now logged in.</label>

        

            <button className={"btn btn-warning"}
                onClick={() => {
                    fakeAuth.signOut(() => history.push("/home"));


                }}
            >
                Sign out
                  </button>

        </div>
    ) : (
            <div>
                <p>You are not logged in.</p>
                <button type={"button"} onClick={LoginPage()}>Log in</button>
            </div>
        );
}









function PrivateRoute({ children, ...rest }) {

    return (
        <Route
            {...rest}
            render={({ location }) =>

                fakeAuth.isAuthenticated ? (

                    children


                ) : (

                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}






function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/dashboard" } };

    //here login is a callback function
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);

        });
    };


    return (
        <div>

            <Login loginFunc={login} />

        </div>
    );
}



