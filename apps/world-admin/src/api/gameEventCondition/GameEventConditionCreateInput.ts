import { GameEventCreateNestedManyWithoutGameEventConditionsInput } from "./GameEventCreateNestedManyWithoutGameEventConditionsInput";

export type GameEventConditionCreateInput = {
  description: string;
  gameEvents?: GameEventCreateNestedManyWithoutGameEventConditionsInput;
  name?: string | null;
};
