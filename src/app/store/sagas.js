import { take, put, select } from 'redux-saga/effects';
import axios from 'axios';
const uuid = require('uuid').v4;
import * as mutations from './mutations';
import _ from "lodash";

const url = "http://localhost:8080";

export function* betMatchSaga(){
    while (true) {
        const args = _.pick(yield take(mutations.REQUEST_BET_MATCH), ['gameId', 'matchId', 'goalsHomeTeam', 'goalsAwayTeam']);
        const ownerId = 1;
        const betId = uuid();
        yield put(mutations.betMatch(betId, args.gameId, args.matchId, ownerId, args.goalsHomeTeam, args.goalsAwayTeam));
        yield axios.post(url + `/bets`, {
            bet: {
                id: betId,
                match: args.matchId,
                owner: ownerId,
                goalsHomeTeam: args.goalsHomeTeam,
                goalsAwayTeam: args.goalsAwayTeam,
                game: args.gameId
            }
        });
    }
}

export function* userAuthenticationSaga(){
    while(true){
        const { username, password } = yield take(mutations.REQUEST_AUTHENTICATE_USER);
        try {
            const { data } = yield axios.post(url + `/authenticate`, {username, password});
            if(!data){
                throw new Error();
            }
            yield put(mutations.loadState(data.state));
            yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));
        } catch (e){
            console.log('cannot authenticate user');
            yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
        }
    }
}