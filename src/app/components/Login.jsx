import React from "react";
import { connect } from "react-redux";
import * as mutations from '../store/mutations';

const Login = ({authenticateUser, authenticated}) => {
  return <div>
    <h2>Please login</h2>
    <form onSubmit={authenticateUser}>
        <input 
            type="text" 
            name="username" 
            id="username" 
            placeholder="username"
            defaultValue="User A"
        />
        <input 
            type="password" 
            name="password" 
            id="password"
            defaultValue="passa"
        />
        {authenticated === mutations.NOT_AUTHENTICATED ? <p>Login incorrect</p> : null}
        <button type="submit">
            Login
        </button>
    </form>
  </div>;
};

const mapStateToProps = ({session})=>({
    authenticated: session.authenticated
});

const mapDispatchToProps = (dispatch) => ({
    authenticateUser(e){
        e.preventDefault();
        let username = e.target[`username`].value;
        let password = e.target[`password`].value;
        dispatch(mutations.requestAuthenticateUser(username, password));
    }
});

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
