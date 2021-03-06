import _ from 'lodash';

export const goalMinValue = 0;
export const goalMaxValue = 9;

export const getLastMatch = (matches) => {
  const matchesWithResult = _.filter(
    matches, (match) => match.goalsHomeTeam !== null && match.goalsAwayTeam !== null);
  const matchesWithResultSortedDesc = _.orderBy(matchesWithResult, ['event_datetime'], ['desc']);
  return _.head(matchesWithResultSortedDesc);
};

export const getNextMatch = (matches) => {
  const matchesWithoutResult = _.reject(
    matches, (match) => match.goalsHomeTeam !== null && match.goalsAwayTeam !== null);
  const matchesWithoutResultSortedAsc = _.orderBy(matchesWithoutResult, ['event_datetime'], ['asc']);
  return _.head(matchesWithoutResultSortedAsc);
};

export const isMatchOver = (match) => {
  const datetimeAfterMatch = new Date(match.event_datetime.getTime() + (90*60*1000));
  return datetimeAfterMatch < Date.now();
};

export const isMatchStarted = (match) => match.event_datetime < Date.now();

export function handleGoalInput(input, setter) {
  const goals = _.parseInt(input);
  if (goals <= goalMaxValue && goals >= goalMinValue) {
    return setter(goals);
  }
  return null;
}
