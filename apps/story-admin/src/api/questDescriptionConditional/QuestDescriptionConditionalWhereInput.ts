import { StringFilter } from "../../util/StringFilter";
import { QuestWhereUniqueInput } from "../quest/QuestWhereUniqueInput";

export type QuestDescriptionConditionalWhereInput = {
  id?: StringFilter;
  quests?: QuestWhereUniqueInput;
};
