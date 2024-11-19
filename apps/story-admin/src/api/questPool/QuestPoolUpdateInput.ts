import { PoolWhereUniqueInput } from "../pool/PoolWhereUniqueInput";
import { QuestPoolMemberWhereUniqueInput } from "../questPoolMember/QuestPoolMemberWhereUniqueInput";
import { QuestTemplateUpdateManyWithoutQuestPoolsInput } from "./QuestTemplateUpdateManyWithoutQuestPoolsInput";

export type QuestPoolUpdateInput = {
  pool?: PoolWhereUniqueInput;
  questPoolMembers?: QuestPoolMemberWhereUniqueInput | null;
  questTemplates?: QuestTemplateUpdateManyWithoutQuestPoolsInput;
};
