import { StringFilter } from "../../util/StringFilter";
import { QuestListRelationFilter } from "../quest/QuestListRelationFilter";

export type EpicWhereInput = {
  id?: StringFilter;
  quests?: QuestListRelationFilter;
};
