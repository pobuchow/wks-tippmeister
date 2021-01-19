import React, { useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { requestCreateGame } from "../store/mutations/mutations";

export const CreateGameForm = ({ userId, createGame }) => {
  const [name, setName] = useState("");

  return (
    <div>
      <h3>create new game</h3>
      <form>
        <label>
          name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button
          type="button"
          onClick={() => createGame(userId, name)}
        >
        create new game!
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createGame(userId, name) {
      dispatch(requestCreateGame(userId, name));
    },
  };
};

export const ConnectedCreateGameForm = connect(
  (state) => ({userId: state.session.id}),
  mapDispatchToProps
)(CreateGameForm);
