import { GameEvent } from "../gameEvent/GameEvent";

export type GameEventModelEquip = {
  createdAt: Date;
  equipmentId: string;
  gameEvents?: Array<GameEvent>;
  id: string;
  modelid: string;
  updatedAt: Date;
};
