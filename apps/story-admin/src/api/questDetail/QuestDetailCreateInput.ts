import { QuestCreateNestedManyWithoutQuestDetailsInput } from "./QuestCreateNestedManyWithoutQuestDetailsInput";

export type QuestDetailCreateInput = {
  description: string;
  name: string;
  quests?: QuestCreateNestedManyWithoutQuestDetailsInput;
};
