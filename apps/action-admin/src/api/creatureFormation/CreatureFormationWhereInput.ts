import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CreatureListRelationFilter } from "../creature/CreatureListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CreatureFormationWhereInput = {
  angle?: FloatNullableFilter;
  boxId?: StringNullableFilter;
  creatures?: CreatureListRelationFilter;
  dist?: FloatNullableFilter;
  groupId?: StringNullableFilter;
  id?: StringFilter;
  leaderId?: StringFilter;
  memberId?: StringNullableFilter;
};
