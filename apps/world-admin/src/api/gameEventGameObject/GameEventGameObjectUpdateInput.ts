import { GameEventUpdateManyWithoutGameEventGameObjectsInput } from "./GameEventUpdateManyWithoutGameEventGameObjectsInput";

export type GameEventGameObjectUpdateInput = {
  eventEntry?: number | null;
  gameEvents?: GameEventUpdateManyWithoutGameEventGameObjectsInput;
  guid?: number | null;
};
