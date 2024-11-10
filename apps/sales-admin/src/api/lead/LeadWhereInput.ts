import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LeadWhereInput = {
  annualRevenue?: FloatNullableFilter;
  blogSubscriber?: IntNullableFilter;
  campaignName?: StringNullableFilter;
  city?: StringNullableFilter;
  company?: StringNullableFilter;
  companyName?: StringNullableFilter;
  country?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  customer?: StringNullableFilter;
  disabled?: IntNullableFilter;
  docstatus?: IntNullableFilter;
  emailId?: StringNullableFilter;
  fax?: StringNullableFilter;
  firstName?: StringNullableFilter;
  gender?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  image?: StringNullableFilter;
  industry?: StringNullableFilter;
  jobTitle?: StringNullableFilter;
  language?: StringNullableFilter;
  lastName?: StringNullableFilter;
  leadName?: StringNullableFilter;
  leadOwner?: StringNullableFilter;
  marketSegment?: StringNullableFilter;
  middleName?: StringNullableFilter;
  mobileNo?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  namingSeries?: StringNullableFilter;
  noOfEmployees?: StringNullableFilter;
  owner?: StringNullableFilter;
  phone?: StringNullableFilter;
  phoneExt?: StringNullableFilter;
  qualificationStatus?: StringNullableFilter;
  qualifiedBy?: StringNullableFilter;
  qualifiedOn?: DateTimeNullableFilter;
  requestType?: StringNullableFilter;
  salutation?: StringNullableFilter;
  source?: StringNullableFilter;
  state?: StringNullableFilter;
  status?: StringNullableFilter;
  territory?: StringNullableFilter;
  title?: StringNullableFilter;
  typeField?: StringNullableFilter;
  unsubscribed?: IntNullableFilter;
  website?: StringNullableFilter;
};
