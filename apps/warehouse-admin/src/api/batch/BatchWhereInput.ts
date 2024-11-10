import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BatchWhereInput = {
  batchId?: StringNullableFilter;
  batchQty?: FloatNullableFilter;
  description?: StringNullableFilter;
  disabled?: IntNullableFilter;
  docstatus?: IntNullableFilter;
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  image?: StringNullableFilter;
  item?: StringNullableFilter;
  itemName?: StringNullableFilter;
  manufacturingDate?: DateTimeNullableFilter;
  owner?: StringNullableFilter;
  parentBatch?: StringNullableFilter;
  producedQty?: FloatNullableFilter;
  qtyToProduce?: FloatNullableFilter;
  referenceDoctype?: StringNullableFilter;
  referenceName?: StringNullableFilter;
  stockUom?: StringNullableFilter;
  supplier?: StringNullableFilter;
  useBatchwiseValuation?: IntNullableFilter;
};
