import { StringFilter } from "../../util/StringFilter";
import { PoolMemberWhereUniqueInput } from "../poolMember/PoolMemberWhereUniqueInput";
import { QuestPoolListRelationFilter } from "../questPool/QuestPoolListRelationFilter";

export type QuestPoolMemberWhereInput = {
  id?: StringFilter;
  poolMember?: PoolMemberWhereUniqueInput;
  questPoolTemplates?: QuestPoolListRelationFilter;
};
