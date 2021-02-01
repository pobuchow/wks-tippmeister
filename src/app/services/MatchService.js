class MatchService {
    getLastMatch(matches) {
        const matchesWithoutResult = _.filter(matches, function (match) {
            return match.goalsHomeTeam && match.goalsAwayTeam;
        });
        const matchesWithoutResultSortedDesc = _.orderBy(matchesWithoutResult, ['event_datetime'], ['desc']);
        return _.head(matchesWithoutResultSortedDesc);
    }
 
    getNextMatch(matches) {
        const matchesWithResult = _.reject(matches, function (match) {
            return match.goalsHomeTeam && match.goalsAwayTeam;
        });
        const matchesWithResultSortedAsc = _.orderBy(matchesWithResult, ['event_datetime'], ['asc']);
        return _.head(matchesWithResultSortedAsc);
    }

    isMatchOver(match){
        let datetimeAfterMatch = new Date(match.event_datetime.getTime() + (90*60*1000));
        return datetimeAfterMatch < Date.now()
    }
}
 
export const matchService = new MatchService();
