import { UnitListRelationFilter } from "../unit/UnitListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AddressWhereInput = {
  competitorBusinessUnits?: UnitListRelationFilter;
  id?: StringFilter;
};
