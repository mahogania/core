import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { QuestWhereUniqueInput } from "../quest/QuestWhereUniqueInput";

export type AreaQuestTriggerCreateInput = {
  area?: AreaWhereUniqueInput | null;
  quest?: QuestWhereUniqueInput | null;
};
