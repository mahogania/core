import { PoolMemberWhereUniqueInput } from "../poolMember/PoolMemberWhereUniqueInput";
import { QuestPoolUpdateManyWithoutQuestPoolMembersInput } from "./QuestPoolUpdateManyWithoutQuestPoolMembersInput";

export type QuestPoolMemberUpdateInput = {
  poolMember?: PoolMemberWhereUniqueInput;
  questPoolTemplates?: QuestPoolUpdateManyWithoutQuestPoolMembersInput;
};
