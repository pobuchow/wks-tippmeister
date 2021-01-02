import { createStore, applyMiddleware, combineReducers } from 'redux';
import { initialState } from '../../server/initialState';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as sagas from './sagas';
import * as mutations from './mutations';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({
        session(userSession = initialState.session || {}, action){
            let { type, authenticated, session } = action;
            switch (type){
                case mutations.REQUEST_AUTHENTICATE_USER:
                    return {...userSession, authenticated: mutations.AUTHENTICATING};
                case mutations.PROCESSING_AUTHENTICATE_USER:
                    return {...userSession, authenticated};
                default:
                    return userSession;
            }
            return session;
        },
        bets(bets = initialState.bets, action){
            switch(action.type){
                case mutations.BET_MATCH : 
                    return [...bets, {
                            id: action.betId,
                            match: action.matchId,
                            owner: action.ownerId,
                            game: action.gameId,
                            goalsHomeTeam: action.goalsHomeTeam,
                            goalsAwayTeam: action.goalsAwayTeam
                    }]
            }
            return bets;
        },
        matches(matches = initialState.matches){
            return matches;
        },
        games(games = initialState.games){
            return games;
        },
        users(users = initialState.users){
            return users;
        },
        scores(scores = initialState.scores){
            return scores;
        }       
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for( let saga in sagas ){
    sagaMiddleware.run(sagas[saga]);
}