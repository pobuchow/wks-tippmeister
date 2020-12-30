export const REQUEST_BET_MATCH = `REQUEST_BET_MATCH`;
export const BET_MATCH = `BET_MATCH`;

export const requestBetMatch = (gameId, matchId, goalsHomeTeam, goalsAwayTeam) => ({
    type:REQUEST_BET_MATCH,
    gameId,
    matchId, 
    goalsHomeTeam, 
    goalsAwayTeam
});

export const betMatch = (betId, gameId, matchId, ownerId, goalsHomeTeam, goalsAwayTeam) => ({
    type: BET_MATCH,
    betId,
    gameId,
    matchId,
    ownerId, 
    goalsHomeTeam, 
    goalsAwayTeam
});