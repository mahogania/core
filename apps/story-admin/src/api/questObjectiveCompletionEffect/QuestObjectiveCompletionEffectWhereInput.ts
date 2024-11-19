import { StringFilter } from "../../util/StringFilter";
import { QuestObjectiveListRelationFilter } from "../questObjective/QuestObjectiveListRelationFilter";

export type QuestObjectiveCompletionEffectWhereInput = {
  id?: StringFilter;
  questObjectives?: QuestObjectiveListRelationFilter;
};
