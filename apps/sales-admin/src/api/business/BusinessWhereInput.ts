import { UnitListRelationFilter } from "../unit/UnitListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IndustryWhereUniqueInput } from "../industry/IndustryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RelationListRelationFilter } from "../relation/RelationListRelationFilter";
import { StrengthListRelationFilter } from "../strength/StrengthListRelationFilter";
import { RelationWhereUniqueInput } from "../relation/RelationWhereUniqueInput";
import { WeaknessListRelationFilter } from "../weakness/WeaknessListRelationFilter";

export type BusinessWhereInput = {
  businessUnits?: UnitListRelationFilter;
  id?: StringFilter;
  industry?: IndustryWhereUniqueInput;
  name?: StringNullableFilter;
  predecessorRelations?: RelationListRelationFilter;
  strengths?: StrengthListRelationFilter;
  succesorRelations?: RelationWhereUniqueInput;
  weaknesses?: WeaknessListRelationFilter;
};
