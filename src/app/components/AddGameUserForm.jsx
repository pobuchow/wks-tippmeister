import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import axios from "axios";
import { requestUpdateGame } from "../store/mutations/mutations";

export const AddGameUserForm = ({ game, updateGame }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(async () => {
    const url = "http://localhost:8080";
    const result = await axios(url + `/users`);
    let availableUsers = _.filter(result.data.users, function (user) {
      return !_.includes(game.users, user.id);
    });
    setUsers(availableUsers);
    setUser(_.isEmpty(availableUsers) ? {} : availableUsers[0].id);
  }, []);

  return (
    <div>
      <h3>add new player</h3>
      {_.isEmpty(users) ?
        <h4>No players available</h4>
        :
        <form>
          <label>
            name:
          <select value={user.id} onChange={(e) => setUser(e.target.value)}>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            onClick={() => {
              game.users.push(user);
              let availableUsers = _.filter(users, function (u) { return u.id !== user; });
              setUsers(availableUsers);
              setUser(_.isEmpty(availableUsers) ? {} : availableUsers[0].id);
              updateGame(game);
            }}>
            add!
        </button>
        </form>}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  game: _.find(state.games, ["id", ownProps.game.id])
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateGame(game) {
      dispatch(requestUpdateGame(game));
    },
  };
};

export const ConnectedAddGameUserForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddGameUserForm);
