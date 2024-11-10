import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ItemDefaultWhereInput = {
  buyingCostCenter?: StringNullableFilter;
  company?: StringNullableFilter;
  defaultDiscountAccount?: StringNullableFilter;
  defaultPriceList?: StringNullableFilter;
  defaultProvisionalAccount?: StringNullableFilter;
  defaultSupplier?: StringNullableFilter;
  defaultWarehouse?: StringNullableFilter;
  deferredExpenseAccount?: StringNullableFilter;
  deferredRevenueAccount?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  expenseAccount?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  incomeAccount?: StringNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  sellingCostCenter?: StringNullableFilter;
};
