import { take, put, select} from 'redux-saga/effects';
import * as mutations from './mutations';
const uuid = require('uuid').v4;
import _ from "lodash";

export function* betMatchSaga(){
    while (true) {
        const args = _.pick(yield take(mutations.REQUEST_BET_MATCH), ['gameId', 'matchId']);
        const ownerId = 1;
        const betId = uuid();
        yield put(mutations.betMatch(betId, args.gameId, args.matchId, ownerId));
    }
}
