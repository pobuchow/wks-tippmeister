import React, { useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
const uuid = require("uuid").v4;
import { matchService } from './../../../../services/MatchService';
import { requestBetMatch } from "../../../../store/mutations/betMutations";

export const BetNextMatchForm = ({ match, bet, betMatch }) => {
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
          disabled={matchService.isMatchStarted(match)}
          onClick={() => betMatch(bet, goalsHomeTeam, goalsAwayTeam)}
        >
          bet this match!
        </button>
      </form>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  const userId = state.session.id;
  const match = ownProps.match;
  const betTemplate = { 'match': match.id, 'owner': userId, 'game': ownProps.gameId };
  let bet = _.find(state.bets, betTemplate) || {...betTemplate, 'id' : uuid()};
  return {
    bet: bet,
    match: ownProps.match,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    betMatch(bet, goalsHomeTeam, goalsAwayTeam) {
      bet.goalsHomeTeam = goalsHomeTeam;
      bet.goalsAwayTeam = goalsAwayTeam;
      dispatch(requestBetMatch(bet));
    },
  };
};

export const ConnectedBetNextMatchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(BetNextMatchForm);
