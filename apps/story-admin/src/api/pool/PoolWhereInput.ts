import { StringFilter } from "../../util/StringFilter";
import { QuestPoolListRelationFilter } from "../questPool/QuestPoolListRelationFilter";

export type PoolWhereInput = {
  id?: StringFilter;
  questPool?: QuestPoolListRelationFilter;
};
