import { take, put, select} from 'redux-saga/effects';
import * as mutations from './mutations';
const uuid = require('uuid').v4

export function* betMatchSaga(){
    while (true) {
        const { matchId } = yield take(mutations.REQUEST_BET_MATCH);
        const ownerId = 1;
        const betId = uuid();
        yield put(mutations.betMatch(betId, matchId, ownerId));
    }
}
