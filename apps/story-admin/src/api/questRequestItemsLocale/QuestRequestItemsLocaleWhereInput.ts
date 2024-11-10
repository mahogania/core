import { StringFilter } from "../../util/StringFilter";
import { QuestRequestItemWhereUniqueInput } from "../questRequestItem/QuestRequestItemWhereUniqueInput";

export type QuestRequestItemsLocaleWhereInput = {
  id?: StringFilter;
  questRequestItem?: QuestRequestItemWhereUniqueInput;
};
