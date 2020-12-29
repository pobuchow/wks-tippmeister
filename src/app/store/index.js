import { createStore, applyMiddleware, combineReducers } from 'redux';
import { initialState } from '../../server/initialState';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { betMatchSaga } from './sagas.mock';
import * as mutations from './mutations';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({
        bets(bets = initialState.bets, action){
            switch(action.type){
                case mutations.BET_MATCH : 
                    return [...bets, {
                            id: action.betId,
                            match: action.matchId,
                            owner: action.ownerId,
                            game: 1,
                            goalsHomeTeam: 0,
                            goalsAwayTeam: 0
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

sagaMiddleware.run(betMatchSaga);