import { QuestCreateNestedManyWithoutEpicsInput } from "./QuestCreateNestedManyWithoutEpicsInput";

export type EpicCreateInput = {
  quests?: QuestCreateNestedManyWithoutEpicsInput;
};
