import { PoolWhereUniqueInput } from "../pool/PoolWhereUniqueInput";
import { QuestPoolMemberWhereUniqueInput } from "../questPoolMember/QuestPoolMemberWhereUniqueInput";
import { QuestTemplateCreateNestedManyWithoutQuestPoolsInput } from "./QuestTemplateCreateNestedManyWithoutQuestPoolsInput";

export type QuestPoolCreateInput = {
  pool: PoolWhereUniqueInput;
  questPoolMembers?: QuestPoolMemberWhereUniqueInput | null;
  questTemplates?: QuestTemplateCreateNestedManyWithoutQuestPoolsInput;
};
