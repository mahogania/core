import { GameEventUpdateManyWithoutGameEventConditionsInput } from "./GameEventUpdateManyWithoutGameEventConditionsInput";

export type GameEventConditionUpdateInput = {
  description?: string;
  gameEvents?: GameEventUpdateManyWithoutGameEventConditionsInput;
  name?: string | null;
};
