import { GameEventCreateNestedManyWithoutGameEventQuestsInput } from "./GameEventCreateNestedManyWithoutGameEventQuestsInput";

export type GameEventQuestCreateInput = {
  description: string;
  gameEvents?: GameEventCreateNestedManyWithoutGameEventQuestsInput;
  name: string;
};
