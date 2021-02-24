import _ from "lodash";

const goalMinValue = 0;
const goalMaxValue = 9;

class MatchService {
    
    getLastMatch(matches) {
        const matchesWithResult = _.filter(matches, function (match) {
            return match.goalsHomeTeam !==null && match.goalsAwayTeam !== null;
        });
        const matchesWithResultSortedDesc = _.orderBy(matchesWithResult, ['event_datetime'], ['desc']);
        return _.head(matchesWithResultSortedDesc);
    }
 
    getNextMatch(matches) {
        const matchesWithoutResult = _.reject(matches, function (match) {
            return match.goalsHomeTeam !==null && match.goalsAwayTeam !== null;
        });
        const matchesWithoutResultSortedAsc = _.orderBy(matchesWithoutResult, ['event_datetime'], ['asc']);
        return _.head(matchesWithoutResultSortedAsc);
    }

    isMatchOver(match){
        let datetimeAfterMatch = new Date(match.event_datetime.getTime() + (90*60*1000));
        return datetimeAfterMatch < Date.now()
    }

    isMatchStarted(match){
        return match.event_datetime < Date.now()
    }

    handleGoalInput(input, setter){
        let goals = _.parseInt(input);
        if(goals <= goalMaxValue && goals >= goalMinValue){
            return setter(goals);
        }
    }

    getGoalMinValue(){
        return goalMinValue;
    }

    getGoalMaxValue(){
        return goalMaxValue;
    }
}
 
export const matchService = new MatchService();
