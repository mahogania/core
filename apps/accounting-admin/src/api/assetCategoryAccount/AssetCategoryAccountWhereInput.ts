import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AssetCategoryAccountWhereInput = {
  accumulatedDepreciationAccount?: StringNullableFilter;
  capitalWorkInProgressAccount?: StringNullableFilter;
  companyName?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  depreciationExpenseAccount?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  fixedAssetAccount?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
};
