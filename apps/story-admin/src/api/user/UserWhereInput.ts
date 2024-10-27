import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestListRelationFilter } from "../quest/QuestListRelationFilter";
import { ScenarioListRelationFilter } from "../scenario/ScenarioListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  quests?: QuestListRelationFilter;
  scenarios?: ScenarioListRelationFilter;
  username?: StringFilter;
};
