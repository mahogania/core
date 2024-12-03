import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CouponCodeWhereInput = {
  amendedFrom?: StringNullableFilter;
  couponCode?: StringNullableFilter;
  couponName?: StringNullableFilter;
  couponType?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  customer?: StringNullableFilter;
  description?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  maximumUse?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  pricingRule?: StringNullableFilter;
  used?: IntNullableFilter;
  validFrom?: DateTimeNullableFilter;
  validUpto?: DateTimeNullableFilter;
};
