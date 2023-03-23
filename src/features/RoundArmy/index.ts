export { CardsToChoose } from "./ui/CardsToChoose";
export { YourPoints } from "./ui/YourPoints";
export { YourArmy } from "./ui/YourArmy";
export { RoundNumber } from "./ui/RoundNumber";
export { NextRoundBtn } from "./ui/NextRoundBtn";

export type { RoundArmySliceState } from "./model/round-army.slice";
export {
  roundArmyReducer,
  roundArmyActions,
  selectTotalPoints,
  selectRoundArmy,
  selectRoundNumber,
} from "./model/round-army.slice";
