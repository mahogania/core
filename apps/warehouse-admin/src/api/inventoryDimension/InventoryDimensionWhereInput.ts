import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InventoryDimensionWhereInput = {
  applyToAllDoctypes?: IntNullableFilter;
  condition?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  dimensionName?: StringNullableFilter;
  disabled?: IntNullableFilter;
  docstatus?: IntNullableFilter;
  documentType?: StringNullableFilter;
  fetchFromParent?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  isttable?: IntNullableFilter;
  mandatoryDependsOn?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  referenceDocument?: StringNullableFilter;
  reqd?: IntNullableFilter;
  sourceFieldname?: StringNullableFilter;
  targetFieldname?: StringNullableFilter;
  typeOfTransaction?: StringNullableFilter;
  validateNegativeStock?: IntNullableFilter;
};
