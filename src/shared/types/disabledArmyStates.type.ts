import { ArmyType } from "../enums/armyType.enum";

export type DisabledArmyStates = {
  [key in ArmyType]: boolean;
};
