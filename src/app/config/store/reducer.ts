import { combineReducers } from "redux";
import { StateSchema } from "./stateSchema";

import { roundArmyReducer } from "src/features/RoundArmy";

export const reducer = combineReducers<StateSchema>({
  roundArmy: roundArmyReducer,
});
