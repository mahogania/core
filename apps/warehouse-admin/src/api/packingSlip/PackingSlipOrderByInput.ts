import { SortOrder } from "../../util/SortOrder";

export type PackingSlipOrderByInput = {
  amendedFrom?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  deliveryNote?: SortOrder;
  docstatus?: SortOrder;
  fromCaseNo?: SortOrder;
  grossWeightPkg?: SortOrder;
  grossWeightUom?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  letterHead?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  namingSeries?: SortOrder;
  netWeightPkg?: SortOrder;
  netWeightUom?: SortOrder;
  owner?: SortOrder;
  toCaseNo?: SortOrder;
  updatedAt?: SortOrder;
};
