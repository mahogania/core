import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StockReconciliationItemWhereInput = {
  allowZeroValuationRate?: BooleanNullableFilter;
  amount?: FloatNullableFilter;
  amountDifference?: FloatNullableFilter;
  barcode?: StringNullableFilter;
  batchNo?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  currentAmount?: FloatNullableFilter;
  currentQty?: FloatNullableFilter;
  currentSerialAndBatchBundle?: StringNullableFilter;
  currentSerialNo?: StringNullableFilter;
  currentValuationRate?: FloatNullableFilter;
  docstatus?: IntNullableFilter;
  hasItemScanned?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  itemCode?: StringNullableFilter;
  itemGroup?: StringNullableFilter;
  itemName?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  qty?: FloatNullableFilter;
  quantityDifference?: StringNullableFilter;
  reconcileAllSerialBatch?: BooleanNullableFilter;
  serialAndBatchBundle?: StringNullableFilter;
  serialNo?: StringNullableFilter;
  useSerialBatchFields?: BooleanNullableFilter;
  valuationRate?: FloatNullableFilter;
  warehouse?: StringNullableFilter;
};
