import { StringFilter } from "../../util/StringFilter";
import { QuestRequestItemWhereUniqueInput } from "../questRequestItem/QuestRequestItemWhereUniqueInput";

export type QuestRequestItemConditionalWhereInput = {
  id?: StringFilter;
  questRequestItem?: QuestRequestItemWhereUniqueInput;
};
