import { StringFilter } from "../../util/StringFilter";
import { PoolWhereUniqueInput } from "../pool/PoolWhereUniqueInput";
import { QuestPoolMemberWhereUniqueInput } from "../questPoolMember/QuestPoolMemberWhereUniqueInput";
import { QuestTemplateListRelationFilter } from "../questTemplate/QuestTemplateListRelationFilter";

export type QuestPoolWhereInput = {
  id?: StringFilter;
  pool?: PoolWhereUniqueInput;
  questPoolMembers?: QuestPoolMemberWhereUniqueInput;
  questTemplates?: QuestTemplateListRelationFilter;
};
