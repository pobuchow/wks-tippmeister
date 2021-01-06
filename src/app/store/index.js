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
            let { type, authenticated } = action;
            switch (type){
                case mutations.REQUEST_AUTHENTICATE_USER:
                    return {...userSession, authenticated: mutations.AUTHENTICATING};
                case mutations.PROCESSING_AUTHENTICATE_USER:
                    return {...userSession, authenticated};
                case mutations.LOAD_STATE:
                    return {...userSession, id: action.state.session.id};
                default:
                    return userSession;
            }
        },
        bets(bets = [], action){
            switch(action.type){
                case mutations.BET_MATCH : 
                    return [...bets, {
                            id: action.betId,
                            match: action.matchId,
                            owner: action.ownerId,
                            game: action.gameId,
                            goalsHomeTeam: action.goalsHomeTeam,
                            goalsAwayTeam: action.goalsAwayTeam
                    }];
                case mutations.LOAD_STATE:
                    return action.state.bets;
            }
            return bets;
        },
        matches(matches = [], action){
            switch(action.type){
                case mutations.LOAD_STATE:
                    let matches = action.state.matches;
                    matches.forEach(match => {
                        match.event_datetime = new Date(match.event_datetime);
                    });
                    return matches;
            }
            return matches;
        },
        games(games = [], action){
            switch(action.type){
                case mutations.CREATE_GAME : 
                    return [...games, {
                            id: action.gameId,
                            name: action.name,
                            owner: action.userId
                    }];
                case mutations.LOAD_STATE:
                    return action.state.games;
            }
            return games;
        },
        users(users = [], action){
            switch(action.type){
                case mutations.LOAD_STATE:
                    return action.state.users;
            }
            return users;
        },
        scores(scores = [], action){
            switch(action.type){
                case mutations.LOAD_STATE:
                    return action.state.scores;
            }
            return scores;
        }       
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for( let saga in sagas ){
    sagaMiddleware.run(sagas[saga]);
}