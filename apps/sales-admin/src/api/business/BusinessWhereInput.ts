import { UnitListRelationFilter } from "../unit/UnitListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OpportunityListRelationFilter } from "../opportunity/OpportunityListRelationFilter";
import { StrengthListRelationFilter } from "../strength/StrengthListRelationFilter";
import { ThreatListRelationFilter } from "../threat/ThreatListRelationFilter";
import { WeaknessListRelationFilter } from "../weakness/WeaknessListRelationFilter";

export type BusinessWhereInput = {
  businessUnits?: UnitListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  opportunities?: OpportunityListRelationFilter;
  strengths?: StrengthListRelationFilter;
  threats?: ThreatListRelationFilter;
  weaknesses?: WeaknessListRelationFilter;
};
