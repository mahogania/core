import { PoolMemberWhereUniqueInput } from "../poolMember/PoolMemberWhereUniqueInput";
import { QuestPoolCreateNestedManyWithoutQuestPoolMembersInput } from "./QuestPoolCreateNestedManyWithoutQuestPoolMembersInput";

export type QuestPoolMemberCreateInput = {
  poolMember: PoolMemberWhereUniqueInput;
  questPoolTemplates?: QuestPoolCreateNestedManyWithoutQuestPoolMembersInput;
};
