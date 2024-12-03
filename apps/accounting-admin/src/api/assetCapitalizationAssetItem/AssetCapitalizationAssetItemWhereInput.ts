import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AssetCapitalizationAssetItemWhereInput = {
  asset?: StringNullableFilter;
  assetName?: StringNullableFilter;
  assetValue?: FloatNullableFilter;
  costCenter?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  currentAssetValue?: FloatNullableFilter;
  docstatus?: IntNullableFilter;
  financeBook?: StringNullableFilter;
  fixedAssetAccount?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  itemCode?: StringNullableFilter;
  itemName?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
};
