import { SortOrder } from "../../util/SortOrder";

export type InventoryDimensionOrderByInput = {
  applyToAllDoctypes?: SortOrder;
  condition?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  dimensionName?: SortOrder;
  disabled?: SortOrder;
  docstatus?: SortOrder;
  documentType?: SortOrder;
  fetchFromParent?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  isttable?: SortOrder;
  mandatoryDependsOn?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  referenceDocument?: SortOrder;
  reqd?: SortOrder;
  sourceFieldname?: SortOrder;
  targetFieldname?: SortOrder;
  typeOfTransaction?: SortOrder;
  updatedAt?: SortOrder;
  validateNegativeStock?: SortOrder;
};
