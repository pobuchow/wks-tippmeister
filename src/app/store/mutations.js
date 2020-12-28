export const REQUEST_BET_MATCH = `REQUEST_BET_MATCH`;
export const BET_MATCH = `BET_MATCH`;

export const requestBetMatch = (matchId) => ({
    type:REQUEST_BET_MATCH,
    matchId
});

export const betMatch = (betId, matchId, ownerId) => ({
    type: BET_MATCH,
    betId,
    matchId,
    ownerId
});