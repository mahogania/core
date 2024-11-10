import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type AssetRepairConsumedItemWhereInput = {
  consumedQuantity?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  itemCode?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentField?: StringNullableFilter;
  parentType?: StringNullableFilter;
  serialAndBatchBundle?: StringNullableFilter;
  serialNo?: StringNullableFilter;
  totalValue?: FloatNullableFilter;
  valuationRate?: FloatNullableFilter;
  warehouse?: StringNullableFilter;
};
