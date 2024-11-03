import { QuestObjectiveCreateNestedManyWithoutQuestRegionsInput } from "./QuestObjectiveCreateNestedManyWithoutQuestRegionsInput";
import { QuestPoiCreateNestedManyWithoutQuestRegionsInput } from "./QuestPoiCreateNestedManyWithoutQuestRegionsInput";

export type QuestRegionCreateInput = {
  name: string;
  questObjectives?: QuestObjectiveCreateNestedManyWithoutQuestRegionsInput;
  questPoiPoints?: QuestPoiCreateNestedManyWithoutQuestRegionsInput;
};
