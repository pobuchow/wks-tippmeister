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