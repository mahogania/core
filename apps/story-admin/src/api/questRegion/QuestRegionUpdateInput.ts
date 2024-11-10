import { QuestObjectiveUpdateManyWithoutQuestRegionsInput } from "./QuestObjectiveUpdateManyWithoutQuestRegionsInput";
import { QuestPoiUpdateManyWithoutQuestRegionsInput } from "./QuestPoiUpdateManyWithoutQuestRegionsInput";

export type QuestRegionUpdateInput = {
  name?: string;
  questObjectives?: QuestObjectiveUpdateManyWithoutQuestRegionsInput;
  questPoiPoints?: QuestPoiUpdateManyWithoutQuestRegionsInput;
};
