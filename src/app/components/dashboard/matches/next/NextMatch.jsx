import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { matchService } from "../../../../services/match/MatchService";
import { ConnectedBetNextMatchForm } from "./BetNextMatchForm";
import { ConnectedSetMatchResultForm } from "./SetMatchResultForm";

export const NextMatch = ({ userId, game, match }) =>
  match ? (
    <div className="page-body-full">
      <div className="page-body-label">next match</div>
      <div className="match-table-frame">
        <div className="match-table-div">
          <table className="match-table">
            <thead>
              <tr>
                <th className="match-header">Home</th>
                <th className="match-header">
                  {match.event_datetime.toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </th>
                <th className="match-header">
                  {match.event_datetime.toLocaleTimeString(undefined, {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </th>
                <th className="match-header">Away</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="match-row">
                  <div className="match-home-team-row">
                    <div className="match-team-icon">
                      <img
                        className="icon-img"
                        src="https://upload.wikimedia.org/wikipedia/en/8/8f/Slask_Wroclaw_crest.png"
                        alt=""
                      />
                    </div>
                    <div className="match-home-team-row-name">
                      <p className="match-home-team-row-name-p">
                        {match.homeTeam}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="match-table-result-row">
                  <p className="text-gray-900 whitespace-no-wrap text-center">
                    ?
                  </p>
                </td>
                <td className="match-table-result-row">
                  <p className="text-gray-900 whitespace-no-wrap text-center">
                    ?
                  </p>
                </td>
                <td className="match-row">
                  <div className="match-away-team-row">
                    <div className="match-away-team-row-name">
                      <p className="match-away-team-row-name-p">
                        {match.awayTeam}
                      </p>
                    </div>
                    <div className="match-team-icon">
                      <img
                        className=".icon-img"
                        src="https://upload.wikimedia.org/wikipedia/en/8/8f/Slask_Wroclaw_crest.png"
                        alt=""
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {match.event_datetime.toLocaleDateString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })}{" "}
      {match.homeTeam} - {match.awayTeam}
      {_.includes(game.hosts, userId) && (
        <ConnectedSetMatchResultForm match={match} />
      )}
      <ConnectedBetNextMatchForm match={match} gameId={game.id} />
    </div>
  ) : null;

function mapState2Props(state, ownProps) {
  const game = _.find(state.games, { id: ownProps.game });
  const matches = _.filter(state.matches, function (match) {
    return _.includes(game.matches, match.id);
  });
  let match = game.isFinished ? null : matchService.getNextMatch(matches);
  return {
    userId: state.session.id,
    game: game,
    match: match,
  };
}

export const ConnectedNextMatch = connect(mapState2Props)(NextMatch);
