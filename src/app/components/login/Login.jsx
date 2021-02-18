import React from "react";
import { connect } from "react-redux";
import * as mutations from "../../store/mutations/mutations";

const Login = ({ authenticateUser, authenticated }) => {
  return (
    <div class="page">
      <div class="page-body">
        <form onSubmit={authenticateUser}>
          <div class="page-body-label">Please login</div>
          <div class="mb-4">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              defaultValue="User A"
            />
          </div>
          <div class="mb-6">
            <input
              type="password"
              name="password"
              id="password"
              defaultValue="passa"
            />
          </div>
          <div class="page-body-buttons">
            <button type="submit">Login</button>
            <a href="#">Forgot Password?</a>
          </div>
          {authenticated === mutations.NOT_AUTHENTICATED ? (
            <p class="text-white text-xs italic">Login incorrect</p>
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
