import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

export const Scoreboard = ({ scores }) => (
    <div>
        <h3>scoreboard</h3>
        {_.orderBy(scores, ['points'], ['desc']).map(score =>(
            <div>
                {score.name} {score.points}
            </div>
        ))}
    </div>
  );
  
  function mapState2Props(state, ownProps) {
    let users = ownProps.users;
    let scores = _.map(ownProps.scores, function(score){
      return {
        id: score.id,
        name: _.find(users, ['id', score.user]).name,
        points: score.points
      }
    })
    return {
      'scores': scores
    }
  }
  
  export const ConnectedScoreboard = connect(mapState2Props)(Scoreboard);