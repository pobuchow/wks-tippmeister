export const REQUEST_BET_MATCH = `REQUEST_BET_MATCH`;
export const BET_MATCH = `BET_MATCH`;

export const requestBetMatch = (gameId, matchId) => ({
    type:REQUEST_BET_MATCH,
    gameId,
    matchId
});

export const betMatch = (betId, gameId, matchId, ownerId) => ({
    type: BET_MATCH,
    betId,
    gameId,
    matchId,
    ownerId
});