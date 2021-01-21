import React, { useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { requestBetMatch } from "../../../../store/mutations/betMutations";

export const BetNextMatchForm = ({ match, userId, betMatch }) => {
  const [goalsHomeTeam, setGoalsHomeTeam] = useState(0);
  const [goalsAwayTeam, setGoalsAwayTeam] = useState(0);

  return (
    <div>
      <form>
        <label>
          {match.homeTeam}
          <input
            type="number"
            value={goalsHomeTeam}
            onChange={(e) => setGoalsHomeTeam(e.target.value)}
          />
        </label>
        <label>
          {match.awayTeam}
          <input
            type="number"
            value={goalsAwayTeam}
            onChange={(e) => setGoalsAwayTeam(e.target.value)}
          />
        </label>
        <button
          type="button"
          onClick={() => betMatch(userId, match.id, goalsHomeTeam, goalsAwayTeam)}
        >
          bet this match!
        </button>
      </form>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    userId: state.session.id,
    match: ownProps.match,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const gameId = ownProps.gameId;
  return {
    betMatch(userId, matchId, goalsHomeTeam, goalsAwayTeam) {
      dispatch(requestBetMatch(userId, gameId, matchId, goalsHomeTeam, goalsAwayTeam));
    },
  };
};

export const ConnectedBetNextMatchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(BetNextMatchForm);
