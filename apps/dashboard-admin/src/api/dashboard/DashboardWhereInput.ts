import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DashboardWhereInput = {
  chartOptions?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  dashboardName?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  isDefault?: IntNullableFilter;
  isStandard?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  moduleField?: StringNullableFilter;
  owner?: StringNullableFilter;
};
