import React, { useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { matchService } from "../../../../services/match/MatchService";
import { requestSetMatchResult } from "../../../../store/mutations/matchMutations";

export const SetMatchResultForm = ({ match, requestSetMatchResult }) => {
  const [goalsHomeTeam, setGoalsHomeTeam] = useState(0);
  const [goalsAwayTeam, setGoalsAwayTeam] = useState(0);

  return (
    <div>
      <form>
        <label>
          home team goals:
          <input
            type="number"
            min={matchService.getGoalMinValue()}
            max={matchService.getGoalMaxValue()}
            value={goalsHomeTeam}
            onChange={(e) => matchService.handleGoalInput(e.target.value, setGoalsHomeTeam)}
          />
        </label>
        <label>
          away team goals:
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
          disabled={!matchService.isMatchOver(match)}
          onClick={() => requestSetMatchResult(goalsHomeTeam, goalsAwayTeam)}
        >
        update match!
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestSetMatchResult(goalsHomeTeam, goalsAwayTeam) {
      dispatch(requestSetMatchResult(ownProps.match, goalsHomeTeam, goalsAwayTeam));
    },
  };
};

function mapStateToProps(state, ownProps) {
  return {
    match: ownProps.match
  };
}

export const ConnectedSetMatchResultForm = connect(mapStateToProps, mapDispatchToProps)(SetMatchResultForm);
