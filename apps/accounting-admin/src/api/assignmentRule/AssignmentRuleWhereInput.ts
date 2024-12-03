import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AssignmentRuleWhereInput = {
  assignCondition?: StringNullableFilter;
  closeCondition?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  disabled?: IntNullableFilter;
  docstatus?: IntNullableFilter;
  documentType?: StringNullableFilter;
  dueDateBasedOn?: StringNullableFilter;
  fieldField?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  lastUser?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  priority?: IntNullableFilter;
  rule?: StringNullableFilter;
  unassignCondition?: StringNullableFilter;
};
