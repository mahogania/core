import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { QuestWhereUniqueInput } from "../quest/QuestWhereUniqueInput";

export type AreaQuestTriggerUpdateInput = {
  area?: AreaWhereUniqueInput | null;
  quest?: QuestWhereUniqueInput | null;
};
