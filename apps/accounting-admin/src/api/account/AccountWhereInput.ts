import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type AccountWhereInput = {
  accountCurrency?: StringNullableFilter;
  accountName?: StringNullableFilter;
  accountNumber?: StringNullableFilter;
  accountType?: StringNullableFilter;
  assign?: StringNullableFilter;
  balanceMustBe?: StringNullableFilter;
  comments?: StringNullableFilter;
  company?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  disabled?: IntNullableFilter;
  docstatus?: IntNullableFilter;
  freezeAccount?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  includeInGross?: IntNullableFilter;
  isGroup?: IntNullableFilter;
  lft?: IntNullableFilter;
  likedBy?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  oldParent?: StringNullableFilter;
  owner?: StringNullableFilter;
  parentAccount?: StringNullableFilter;
  reportType?: StringNullableFilter;
  rgt?: IntNullableFilter;
  rootType?: StringNullableFilter;
  taxRate?: FloatNullableFilter;
  userTags?: StringNullableFilter;
};