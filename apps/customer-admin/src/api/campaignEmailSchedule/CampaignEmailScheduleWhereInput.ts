import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CampaignEmailScheduleWhereInput = {
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  emailTemplate?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  sendAfterDays?: IntNullableFilter;
};
