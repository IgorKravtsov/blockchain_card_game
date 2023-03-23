import { IRound } from "./round.interface";

export interface IRoom {
  signature: number;
  bet: number;
  owner: string;
  ownerBalance: number;
  player: string;
  playerBalance: number;
  rounds: IRound[];
}
