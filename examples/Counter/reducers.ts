import { combineReducers } from "redux";

import { handleActions } from "../../src";
import actions from "./actions";
import { State } from "./types";

const INITIAL_STATE = 0;

export const counter = handleActions<number>(
  [
    actions.increment.reduce(state => state + 1),
    actions.decrement.reduce(state => state - 1),
    actions.adjust.reduce((state, payload) => state + payload)
  ],
  INITIAL_STATE
);

export default combineReducers<State>({
  counter
});
