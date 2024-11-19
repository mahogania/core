import { UnitListRelationFilter } from "../unit/UnitListRelationFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AddressWhereInput = {
  competitorBusinessUnits?: UnitListRelationFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
};
