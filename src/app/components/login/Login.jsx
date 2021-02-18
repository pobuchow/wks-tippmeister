import React from "react";
import { connect } from "react-redux";
import * as mutations from "../../store/mutations/mutations";

const Login = ({ authenticateUser, authenticated }) => {
  return (
    <div className="page">
      <div className="page-body-md">
        <form onSubmit={authenticateUser}>
          <div className="page-body-label">Please login</div>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              defaultValue="User A"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              id="password"
              defaultValue="passa"
            />
          </div>
          <div className="page-body-buttons">
            <button type="submit">Login</button>
            <a className='link' href="#" onClick={() => { alert('not implemented yet'); }}>Forgot Password?</a>
          </div>
          {authenticated === mutations.NOT_AUTHENTICATED ? (
            <p className="text-white text-xs italic">Login incorrect</p>
          ) : null}
        </form>
      </div>
    </div>
  );
};



const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  authenticateUser(e) {
    e.preventDefault();
    let username = e.target[`username`].value;
    let password = e.target[`password`].value;
    dispatch(mutations.requestAuthenticateUser(username, password));
  },
});

export const ConnectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
