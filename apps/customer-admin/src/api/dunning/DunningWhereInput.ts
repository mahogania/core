import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DunningWhereInput = {
  addressDisplay?: StringNullableFilter;
  amendedFrom?: StringNullableFilter;
  baseDunningAmount?: FloatNullableFilter;
  bodyText?: StringNullableFilter;
  closingText?: StringNullableFilter;
  company?: StringNullableFilter;
  companyAddress?: StringNullableFilter;
  companyAddressDisplay?: StringNullableFilter;
  contactDisplay?: StringNullableFilter;
  contactEmail?: StringNullableFilter;
  contactMobile?: StringNullableFilter;
  contactPerson?: StringNullableFilter;
  conversionRate?: FloatNullableFilter;
  costCenter?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  currency?: StringNullableFilter;
  customer?: StringNullableFilter;
  customerAddress?: StringNullableFilter;
  customerName?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  dunningAmount?: FloatNullableFilter;
  dunningFee?: FloatNullableFilter;
  dunningType?: StringNullableFilter;
  grandTotal?: FloatNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  incomeAccount?: StringNullableFilter;
  language?: StringNullableFilter;
  letterHead?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  namingSeries?: StringNullableFilter;
  owner?: StringNullableFilter;
  postingDate?: DateTimeNullableFilter;
  postingTime?: DateTimeNullableFilter;
  rateOfInterest?: FloatNullableFilter;
  spacer?: StringNullableFilter;
  status?: StringNullableFilter;
  totalInterest?: FloatNullableFilter;
  totalOutstanding?: FloatNullableFilter;
};
