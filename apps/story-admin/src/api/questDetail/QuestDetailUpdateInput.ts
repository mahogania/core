import { QuestUpdateManyWithoutQuestDetailsInput } from "./QuestUpdateManyWithoutQuestDetailsInput";

export type QuestDetailUpdateInput = {
  description?: string;
  name?: string;
  quests?: QuestUpdateManyWithoutQuestDetailsInput;
};
