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
}
 
export const matchService = new MatchService();
