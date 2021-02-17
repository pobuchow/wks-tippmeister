import React from "react";
import { connect } from "react-redux";
import * as mutations from "../../store/mutations/mutations";

const Login = ({ authenticateUser, authenticated }) => {
  return (
    <div class="flex items-center justify-center">
      <div class="w-full max-w-md">
        <form onSubmit={authenticateUser}>
          <div class="login-label">Please login</div>
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
          {authenticated === mutations.NOT_AUTHENTICATED ? (
            <p>Login incorrect</p>
          ) : null}
          <button type="submit">Login</button>
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
