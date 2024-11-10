import { StringFilter } from "../../util/StringFilter";
import { QuestPoolMemberListRelationFilter } from "../questPoolMember/QuestPoolMemberListRelationFilter";

export type PoolMemberWhereInput = {
  id?: StringFilter;
  questPoolMembers?: QuestPoolMemberListRelationFilter;
};
