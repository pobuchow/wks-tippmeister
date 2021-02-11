import { take, put } from "redux-saga/effects";
import axios from "axios";
const uuid = require("uuid").v4;
import * as mutations from "./mutations/mutations";
import * as matchMutations from "./mutations/matchMutations";
import * as gameMutations from "./mutations/gameMutations";
import * as betMutations from "./mutations/betMutations";
import _ from "lodash";
import { history } from "./history";

const url = "http://localhost:8080";

export function* betMatchSaga() {
  while (true) {
    const args = _.pick(yield take(betMutations.REQUEST_BET_MATCH), "bet");
    yield put(
      betMutations.betMatch(args.bet)
    );
    yield axios.post(url + `/bets`, {
      bet: args.bet
    });
  }
}

export function* setMatchResult() {
  while (true) {
    const args = _.pick(yield take(matchMutations.REQUEST_SET_MATCH_RESULT), [
      "match",
      "goalsHomeTeam",
      "goalsAwayTeam",
    ]);
    let match = args.match;
    match.goalsHomeTeam = args.goalsHomeTeam;
    match.goalsAwayTeam = args.goalsAwayTeam;
    yield put(matchMutations.updateMatch(match));
    yield axios.post(url + `/matches`, {
      match: match,
    });
  }
}

export function* createGameSaga() {
  while (true) {
    const args = _.pick(yield take(gameMutations.REQUEST_CREATE_GAME), [
      "userId",
      "name",
    ]);
    const gameId = uuid();
    let users = [args.userId];
    let game = {
      id: gameId,
      name: args.name,
      users: users,
      matches: [],
      hosts: [args.userId],
      isFinished: false,
    };
    yield put(gameMutations.createGame(game));
    yield axios.post(url + `/games`, {
      game: game,
    });
  }
}

export function* updateGame() {
  while (true) {
    const args = _.pick(yield take(gameMutations.REQUEST_UPDATE_GAME), ["game"]);
    yield put(gameMutations.updateGame(args.game));
    yield axios.post(url + `/games`, {
      game: args.game,
    });
  }
}

export function* addNewMatchToGame() {
  while (true) {
    const args = _.pick(yield take(matchMutations.REQUEST_ADD_NEW_MATCH_TO_GAME), [
      "game",
      "homeTeam",
      "awayTeam",
      "eventDate",
      "eventTime",
    ]);
    const matchId = uuid();
    let eventDateTime = args.eventDate;
    eventDateTime.setHours(args.eventTime.getHours());
    eventDateTime.setMinutes(args.eventTime.getMinutes());
    let match = {
        id: matchId,
        event_datetime: eventDateTime,
        homeTeam: args.homeTeam,
        awayTeam: args.awayTeam,
        goalsHomeTeam: null,
        goalsAwayTeam: null
    };
    yield put(matchMutations.addMatch(match));
    yield axios.post(url + `/matches`, {
        match: match,
    });
    let game = args.game;
    game.matches.push(matchId);
    yield put(gameMutations.updateGame(game));
    yield axios.post(url + `/games`, {
      game: game,
    });
  }
}

export function* userAuthenticationSaga() {
  while (true) {
    const { username, password } = yield take(
      mutations.REQUEST_AUTHENTICATE_USER
    );
    try {
      const { data } = yield axios.post(url + `/authenticate`, {
        username,
        password,
      });
      if (!data) {
        throw new Error();
      }
      yield put(mutations.loadState(data.state));
      yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));
      history.push("/games");
    } catch (e) {
      console.log("cannot authenticate user");
      yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
    }
  }
}
