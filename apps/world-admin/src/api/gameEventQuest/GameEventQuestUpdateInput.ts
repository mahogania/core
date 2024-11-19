import { GameEventUpdateManyWithoutGameEventQuestsInput } from "./GameEventUpdateManyWithoutGameEventQuestsInput";

export type GameEventQuestUpdateInput = {
  description?: string;
  gameEvents?: GameEventUpdateManyWithoutGameEventQuestsInput;
  name?: string;
};
