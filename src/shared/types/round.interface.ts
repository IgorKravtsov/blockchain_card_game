import { IArmy } from "./army.interface";

export interface IRound {
  ownerArmy: IArmy;
  playerArmy: IArmy;
}
