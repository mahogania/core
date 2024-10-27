import { StringFilter } from "../../util/StringFilter";
import { QuestListRelationFilter } from "../quest/QuestListRelationFilter";

export type QuestCueEffectWhereInput = {
  id?: StringFilter;
  quests?: QuestListRelationFilter;
};
