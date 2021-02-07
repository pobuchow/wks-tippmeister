import React, { useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { matchService } from './../../../../services/MatchService';
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
            min={matchService.getGoalMinValue()}
            max={matchService.getGoalMaxValue()}
            value={goalsHomeTeam}
            onChange={(e) => matchService.handleGoalInput(e.target.value, setGoalsHomeTeam)}
          />
        </label>
        <label>
          {match.awayTeam}
          <input
            type="number"
            min={matchService.getGoalMinValue()}
            max={matchService.getGoalMaxValue()}
            value={goalsAwayTeam}
            onChange={(e) => matchService.handleGoalInput(e.target.value, setGoalsAwayTeam)}
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
