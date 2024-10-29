import { GameEvent } from "../gameEvent/GameEvent";

export type GameEventCreature = {
  createdAt: Date;
  gameEvents?: Array<GameEvent>;
  id: string;
  spawnerId: string;
  updatedAt: Date;
};
