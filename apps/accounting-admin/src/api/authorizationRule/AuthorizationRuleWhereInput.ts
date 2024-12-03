import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type AuthorizationRuleWhereInput = {
  approvingRole?: StringNullableFilter;
  approvingUser?: StringNullableFilter;
  basedOn?: StringNullableFilter;
  company?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  customerOrItem?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  masterName?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  systemRole?: StringNullableFilter;
  systemUser?: StringNullableFilter;
  toDesignation?: StringNullableFilter;
  toEmp?: StringNullableFilter;
  transaction?: StringNullableFilter;
  value?: FloatNullableFilter;
};
