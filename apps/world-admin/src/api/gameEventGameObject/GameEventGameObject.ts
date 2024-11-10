import { GameEvent } from "../gameEvent/GameEvent";

export type GameEventGameObject = {
  createdAt: Date;
  eventEntry: number | null;
  gameEvents?: Array<GameEvent>;
  guid: number | null;
  id: string;
  updatedAt: Date;
};
