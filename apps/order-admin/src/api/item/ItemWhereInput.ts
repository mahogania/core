import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ItemWhereInput = {
  allowAlternativeItem?: IntNullableFilter;
  autoCreateAssets?: IntNullableFilter;
  creation?: DateTimeNullableFilter;
  disabled?: IntNullableFilter;
  docstatus?: IntNullableFilter;
  hasVariants?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  isFixedAsset?: IntNullableFilter;
  isGroupedAsset?: IntNullableFilter;
  isStockItem?: IntNullableFilter;
  itemCode?: StringNullableFilter;
  itemGroup?: StringNullableFilter;
  itemName?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  namingSeries?: StringNullableFilter;
  openingStock?: FloatNullableFilter;
  owner?: StringNullableFilter;
  standardRate?: FloatNullableFilter;
  stockUom?: StringNullableFilter;
  valuationRate?: FloatNullableFilter;
};
