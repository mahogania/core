import { StringFilter } from "../../util/StringFilter";
import { QuestObjectiveListRelationFilter } from "../questObjective/QuestObjectiveListRelationFilter";

export type QuestObjectiveLocaleWhereInput = {
  id?: StringFilter;
  questObjectives?: QuestObjectiveListRelationFilter;
};
