import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PurchaseReceiptItemSuppliedWhereInput = {
  amount?: FloatNullableFilter;
  batchNo?: StringNullableFilter;
  bomDetailNo?: StringNullableFilter;
  consumedQty?: FloatNullableFilter;
  conversionFactor?: FloatNullableFilter;
  creation?: DateTimeNullableFilter;
  currentStock?: FloatNullableFilter;
  description?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  itemName?: StringNullableFilter;
  mainItemCode?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentField?: StringNullableFilter;
  parentType?: StringNullableFilter;
  purchaseOrder?: StringNullableFilter;
  rate?: FloatNullableFilter;
  referenceName?: StringNullableFilter;
  requiredQty?: FloatNullableFilter;
  rmItemCode?: StringNullableFilter;
  serialNo?: StringNullableFilter;
  stockUom?: StringNullableFilter;
};