import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { QuestWhereUniqueInput } from "../quest/QuestWhereUniqueInput";

export type AreaQuestTriggerWhereInput = {
  area?: AreaWhereUniqueInput;
  id?: StringFilter;
  quest?: QuestWhereUniqueInput;
};
