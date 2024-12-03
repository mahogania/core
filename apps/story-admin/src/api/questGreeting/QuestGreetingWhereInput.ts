import { StringFilter } from "../../util/StringFilter";
import { QuestGreetingLocaleListRelationFilter } from "../questGreetingLocale/QuestGreetingLocaleListRelationFilter";
import { QuestListRelationFilter } from "../quest/QuestListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type QuestGreetingWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  questGreetingLocales?: QuestGreetingLocaleListRelationFilter;
  quests?: QuestListRelationFilter;
  text?: StringNullableFilter;
};
