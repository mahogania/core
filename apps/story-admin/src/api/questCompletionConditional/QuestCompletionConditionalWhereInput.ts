import { StringFilter } from "../../util/StringFilter";
import { QuestWhereUniqueInput } from "../quest/QuestWhereUniqueInput";

export type QuestCompletionConditionalWhereInput = {
  id?: StringFilter;
  quest?: QuestWhereUniqueInput;
};
