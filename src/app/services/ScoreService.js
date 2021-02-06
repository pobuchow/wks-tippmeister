import _ from "lodash";

class ScoreService {
    calcPoints(matches, bets) {
        let result = 0;
        _.forEach(matches, function(match) {
            let bet = _.find(bets, { 'match': match.id });
            if(bet && 
                bet.goalsHomeTeam !== null &&
                bet.goalsAwayTeam !== null &&
                match.goalsHomeTeam !== null &&
                match.goalsAwayTeam !== null &&
                Math.sign(match.goalsHomeTeam - match.goalsAwayTeam) === Math.sign(bet.goalsHomeTeam - bet.goalsAwayTeam)){
                result++;
                if(match.goalsHomeTeam === bet.goalsHomeTeam && match.goalsAwayTeam === bet.goalsAwayTeam){
                    result++;
                }
            }
          });
        return result;
    }
}
 
export const scoreService = new ScoreService();
