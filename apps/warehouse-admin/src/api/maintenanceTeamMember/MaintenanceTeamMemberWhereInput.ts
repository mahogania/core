import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MaintenanceTeamMemberWhereInput = {
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  maintenanceRole?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  teamMember?: StringNullableFilter;
};
