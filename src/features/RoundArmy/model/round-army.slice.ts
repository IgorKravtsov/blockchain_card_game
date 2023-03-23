import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { armyPrice, ArmyType } from "src/shared";

import { StateSchema } from "src/app";

interface ArmyPrice {
  meleePrice: number;
  rangePrice: number;
  siegePrice: number;
}

type ArmyPrices = {
  [x in ArmyType]: number;
};

export interface RoundArmySliceState {
  totalPoints: number;
  currentPoints: number;
  roundNumber: number;

  meleePrice: number;
  rangePrice: number;
  siegePrice: number;

  meleeArmyCount: number;
  rangedArmyCount: number;
  siegeArmyCount: number;
}

const initialState: RoundArmySliceState = {
  totalPoints: 0,
  currentPoints: 0,
  roundNumber: 1,
  meleeArmyCount: 0,
  rangedArmyCount: 0,
  siegeArmyCount: 0,

  meleePrice: 1,
  rangePrice: 2,
  siegePrice: 3,
};

const roundArmy = createSlice({
  name: "roundArmy",
  initialState,
  reducers: {
    setTotalPoints(state, action: PayloadAction<number>) {
      state.totalPoints = action.payload;
    },
    addPoints(state, action: PayloadAction<number>) {
      state.currentPoints += action.payload;
    },
    removePoints(state, action: PayloadAction<number>) {
      state.currentPoints -= action.payload;
    },
    setCurrentPoints(state, action: PayloadAction<number>) {
      state.currentPoints = action.payload;
    },
    setFirstValues(state, action: PayloadAction<number>) {
      state.totalPoints = action.payload;
      state.currentPoints = action.payload;
    },
    nextRound(state) {
      state.roundNumber++;
    },
    resetArmy(state) {
      state.meleeArmyCount = 0;
      state.rangedArmyCount = 0;
      state.siegeArmyCount = 0;
    },
    resetAllData(state) {
      state.meleeArmyCount = 0;
      state.rangedArmyCount = 0;
      state.siegeArmyCount = 0;
      state.roundNumber = 1;
      state.totalPoints = 0;
    },
    add(state, action: PayloadAction<ArmyType>) {
      switch (action.payload) {
        case ArmyType.Melee:
          state.meleeArmyCount++;
          state.currentPoints -= armyPrice.Melee;
          break;
        case ArmyType.Ranged:
          state.rangedArmyCount++;
          state.currentPoints -= armyPrice.Ranged;
          break;
        case ArmyType.Siege:
          state.siegeArmyCount++;
          state.currentPoints -= armyPrice.Siege;
          break;
      }
    },
    remove(state, action: PayloadAction<ArmyType>) {
      switch (action.payload) {
        case ArmyType.Melee:
          state.meleeArmyCount--;
          state.currentPoints += armyPrice.Melee;
          break;
        case ArmyType.Ranged:
          state.rangedArmyCount--;
          state.currentPoints += armyPrice.Ranged;
          break;
        case ArmyType.Siege:
          state.siegeArmyCount--;
          state.currentPoints += armyPrice.Siege;
          break;
      }
    },
    updateInitialData(state, payload: PayloadAction<ArmyPrice>) {
      state.meleePrice = payload.payload.meleePrice || 1;
      state.rangePrice = payload.payload.rangePrice || 2;
      state.siegePrice = payload.payload.siegePrice || 3;
    },
  },
});

export const { actions: roundArmyActions } = roundArmy;
export const roundArmyReducer = roundArmy.reducer;

export const selectRoundArmy = (state: StateSchema) => state.roundArmy;

export const selectTotalPoints = createSelector(
  selectRoundArmy,
  (state) => state.totalPoints
);

export const selectCurrentPoints = createSelector(
  selectRoundArmy,
  (state) => state.currentPoints
);

export const selectRoundNumber = createSelector(
  selectRoundArmy,
  (state) => state.roundNumber
);

export const selectPrices = createSelector(
  selectRoundArmy,
  ({ meleePrice, rangePrice, siegePrice }) => ({
    meleePrice,
    rangePrice,
    siegePrice,
  })
);
