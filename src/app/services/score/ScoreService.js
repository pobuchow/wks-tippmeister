import _ from 'lodash';

function hasBet(bet) {
  return bet && bet.goalsHomeTeam !== null
    && bet.goalsAwayTeam !== null;
}

function hasMatchScore(match) {
  return match.goalsHomeTeam !== null
  && match.goalsAwayTeam !== null;
}

function isBetCorrect(match, bet) {
  return Math.sign(match.goalsHomeTeam - match.goalsAwayTeam)
    === Math.sign(bet.goalsHomeTeam - bet.goalsAwayTeam);
}

function isScoreCorrect(match, bet) {
  return match.goalsHomeTeam === bet.goalsHomeTeam && match.goalsAwayTeam === bet.goalsAwayTeam;
}

export default function calcPoints(matches, bets) {
  let result = 0;
  _.forEach(matches, (match) => {
    const bet = _.find(bets, { match: match.id });
    if (hasBet(bet) && hasMatchScore(match) && isBetCorrect(match, bet)) {
      result += 1;
      if (isScoreCorrect(match, bet)) {
        result += 1;
      }
    }
  });
  return result;
}
