import React, { useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { matchService } from "../../../../services/MatchService";
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
            value={goalsHomeTeam}
            onChange={(e) => setGoalsHomeTeam(_.parseInt(e.target.value))}
          />
        </label>
        <label>
          away team goals:
          <input
            type="number"
            value={goalsAwayTeam}
            onChange={(e) => setGoalsAwayTeam(_.parseInt(e.target.value))}
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
