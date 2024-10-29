import { GameEventCreateNestedManyWithoutGameEventGameObjectsInput } from "./GameEventCreateNestedManyWithoutGameEventGameObjectsInput";

export type GameEventGameObjectCreateInput = {
  eventEntry?: number | null;
  gameEvents?: GameEventCreateNestedManyWithoutGameEventGameObjectsInput;
  guid?: number | null;
};
