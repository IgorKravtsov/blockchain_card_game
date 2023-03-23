import { configureStore } from "@reduxjs/toolkit";

import { StateSchema } from "./stateSchema";
import { reducer } from "src/app/config/store/reducer";

export function createReduxStore(initialState?: StateSchema) {
  return configureStore({
    reducer,
    devTools: true,
    preloadedState: initialState,
  });
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
