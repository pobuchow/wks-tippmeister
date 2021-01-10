export const REQUEST_BET_MATCH = `REQUEST_BET_MATCH`;
export const BET_MATCH = `BET_MATCH`;

export const REQUEST_CREATE_GAME = `REQUEST_CREATE_GAME`;
export const CREATE_GAME = `CREATE_GAME`;

export const REQUEST_UPDATE_GAME = `REQUEST_UPDATE_GAME`;
export const UPDATE_GAME = `UPDATE_GAME`;

export const REQUEST_AUTHENTICATE_USER = `REQUEST_AUTHENTICATE_USER`;
export const PROCESSING_AUTHENTICATE_USER = `PROCESSING_AUTHENTICATE_USER`;
export const AUTHENTICATING = `AUTHENTICATING`;
export const AUTHENTICATED = `AUTHENTICATED`;
export const NOT_AUTHENTICATED = `NOT_AUTHENTICATED`;

export const LOAD_STATE = `LOAD_STATE`;

export const requestBetMatch = (userId, gameId, matchId, goalsHomeTeam, goalsAwayTeam) => ({
    type:REQUEST_BET_MATCH,
    userId,
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

export const requestUpdateGame = (game) => ({
    type:REQUEST_UPDATE_GAME,
    game
});

export const updateGame = (game) => ({
    type:UPDATE_GAME,
    game
});

export const requestCreateGame = (userId, name) => ({
    type:REQUEST_CREATE_GAME,
    userId,
    name
});

export const createGame = (game) => ({
    type: CREATE_GAME,
    game
});

export const requestAuthenticateUser = (username, password)=>({
    type: REQUEST_AUTHENTICATE_USER,
    username,
    password
});

export const processAuthenticateUser = (status = AUTHENTICATING, session = null) => ({
    type: PROCESSING_AUTHENTICATE_USER,
    session,
    authenticated: status
});

export const loadState = (state = {}) => ({
    type: LOAD_STATE,
    state
});