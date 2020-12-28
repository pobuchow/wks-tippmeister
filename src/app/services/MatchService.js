class MatchService {
    getLastMatch(matches) {
        const matchesInPast = _.filter(matches, function (match) {
            return match.event_datetime < new Date()
        });
        const matchesInPastSortedDesc = _.orderBy(matchesInPast, ['event_datetime'], ['desc']);
        return _.head(matchesInPastSortedDesc);
    }
 
    getNextMatch(matches) {
        const matchesInFuture = _.filter(matches, function (match) {
            return match.event_datetime > new Date()
        });
        const matchesInFutureSortedAsc = _.orderBy(matchesInFuture, ['event_datetime'], ['asc']);
        return _.head(matchesInFutureSortedAsc);
    }
}
 
export const matchService = new MatchService();
