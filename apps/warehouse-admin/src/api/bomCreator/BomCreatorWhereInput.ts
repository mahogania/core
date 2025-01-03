import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type BomCreatorWhereInput = {
  amendedFrom?: StringNullableFilter;
  buyingPriceList?: StringNullableFilter;
  company?: StringNullableFilter;
  conversionRate?: FloatNullableFilter;
  creation?: DateTimeNullableFilter;
  currency?: StringNullableFilter;
  defaultWarehouse?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  errorLog?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  itemCode?: StringNullableFilter;
  itemGroup?: StringNullableFilter;
  itemName?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  plcConversionRate?: FloatNullableFilter;
  priceListCurrency?: StringNullableFilter;
  project?: StringNullableFilter;
  qty?: FloatNullableFilter;
  rawMaterialCost?: FloatNullableFilter;
  remarks?: StringNullableFilter;
  rmCostAsPer?: StringNullableFilter;
  setRateBasedOnWarehouse?: BooleanNullableFilter;
  status?: StringNullableFilter;
  uom?: StringNullableFilter;
};
