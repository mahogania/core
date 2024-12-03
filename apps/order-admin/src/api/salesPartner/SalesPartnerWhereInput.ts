import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SalesPartnerWhereInput = {
  commissionRate?: FloatNullableFilter;
  creation?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  introduction?: StringNullableFilter;
  logo?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  partnerName?: StringNullableFilter;
  partnerType?: StringNullableFilter;
  partnerWebsite?: StringNullableFilter;
  referralCode?: StringNullableFilter;
  route?: StringNullableFilter;
  showInWebsite?: IntNullableFilter;
  territory?: StringNullableFilter;
};
