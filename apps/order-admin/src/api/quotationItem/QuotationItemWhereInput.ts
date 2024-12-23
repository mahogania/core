import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type QuotationItemWhereInput = {
  actualQty?: FloatNullableFilter;
  additionalNotes?: StringNullableFilter;
  againstBlanketOrder?: IntNullableFilter;
  amount?: FloatNullableFilter;
  baseAmount?: FloatNullableFilter;
  baseNetAmount?: FloatNullableFilter;
  baseNetRate?: FloatNullableFilter;
  basePriceListRate?: FloatNullableFilter;
  baseRate?: FloatNullableFilter;
  baseRateWithMargin?: FloatNullableFilter;
  blanketOrder?: StringNullableFilter;
  blanketOrderRate?: FloatNullableFilter;
  brand?: StringNullableFilter;
  conversionFactor?: FloatNullableFilter;
  creation?: DateTimeNullableFilter;
  customerItemCode?: StringNullableFilter;
  description?: StringNullableFilter;
  discountAmount?: FloatNullableFilter;
  discountPercentage?: FloatNullableFilter;
  docstatus?: IntNullableFilter;
  grossProfit?: FloatNullableFilter;
  hasAlternativeItem?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  image?: StringNullableFilter;
  isAlternative?: IntNullableFilter;
  isFreeItem?: IntNullableFilter;
  itemCode?: StringNullableFilter;
  itemGroup?: StringNullableFilter;
  itemName?: StringNullableFilter;
  itemTaxRate?: StringNullableFilter;
  itemTaxTemplate?: StringNullableFilter;
  marginRateOrAmount?: FloatNullableFilter;
  marginType?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  netAmount?: FloatNullableFilter;
  netRate?: FloatNullableFilter;
  owner?: StringNullableFilter;
  pageBreak?: IntNullableFilter;
  parent?: StringNullableFilter;
  parentField?: StringNullableFilter;
  parentType?: StringNullableFilter;
  prevdocDocname?: StringNullableFilter;
  prevdocDoctype?: StringNullableFilter;
  priceListRate?: FloatNullableFilter;
  pricingRules?: StringNullableFilter;
  projectedQty?: FloatNullableFilter;
  qty?: FloatNullableFilter;
  rate?: FloatNullableFilter;
  rateWithMargin?: FloatNullableFilter;
  stockQty?: FloatNullableFilter;
  stockUom?: StringNullableFilter;
  stockUomRate?: FloatNullableFilter;
  totalWeight?: FloatNullableFilter;
  uom?: StringNullableFilter;
  valuationRate?: FloatNullableFilter;
  warehouse?: StringNullableFilter;
  weightPerUnit?: FloatNullableFilter;
  weightUom?: StringNullableFilter;
};
