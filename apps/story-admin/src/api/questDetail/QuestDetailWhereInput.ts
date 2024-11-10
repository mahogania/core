import { StringFilter } from "../../util/StringFilter";
import { QuestListRelationFilter } from "../quest/QuestListRelationFilter";

export type QuestDetailWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  quests?: QuestListRelationFilter;
};
