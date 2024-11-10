import { GameEvent } from "../gameEvent/GameEvent";

export type GameEventCondition = {
  createdAt: Date;
  description: string;
  gameEvents?: Array<GameEvent>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
