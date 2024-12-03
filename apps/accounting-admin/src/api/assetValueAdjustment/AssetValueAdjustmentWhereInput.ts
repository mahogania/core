import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AssetValueAdjustmentWhereInput = {
  amendedFrom?: StringNullableFilter;
  asset?: StringNullableFilter;
  assetCategory?: StringNullableFilter;
  company?: StringNullableFilter;
  costCenter?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  currentAssetValue?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  differenceAmount?: FloatNullableFilter;
  docstatus?: IntNullableFilter;
  financeBook?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  journalEntry?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  newAssetValue?: FloatNullableFilter;
  owner?: StringNullableFilter;
};
