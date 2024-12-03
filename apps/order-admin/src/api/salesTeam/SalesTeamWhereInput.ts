import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SalesTeamWhereInput = {
  allocatedAmount?: FloatNullableFilter;
  allocatedPercentage?: FloatNullableFilter;
  commissionRate?: StringNullableFilter;
  contactNo?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  incentives?: FloatNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentField?: StringNullableFilter;
  parentType?: StringNullableFilter;
  salesPerson?: StringNullableFilter;
};
