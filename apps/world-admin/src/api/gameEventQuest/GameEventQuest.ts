import { GameEvent } from "../gameEvent/GameEvent";

export type GameEventQuest = {
  createdAt: Date;
  description: string;
  gameEvents?: Array<GameEvent>;
  id: string;
  name: string;
  updatedAt: Date;
};
