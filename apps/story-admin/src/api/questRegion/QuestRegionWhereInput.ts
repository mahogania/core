import { StringFilter } from "../../util/StringFilter";
import { QuestObjectiveListRelationFilter } from "../questObjective/QuestObjectiveListRelationFilter";
import { QuestPoiListRelationFilter } from "../questPoi/QuestPoiListRelationFilter";

export type QuestRegionWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  questObjectives?: QuestObjectiveListRelationFilter;
  questPoiPoints?: QuestPoiListRelationFilter;
};
