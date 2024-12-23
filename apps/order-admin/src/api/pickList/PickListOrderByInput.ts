import { SortOrder } from "../../util/SortOrder";

export type PickListOrderByInput = {
  amendedFrom?: SortOrder;
  company?: SortOrder;
  considerRejectedWarehouses?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  customer?: SortOrder;
  customerName?: SortOrder;
  docstatus?: SortOrder;
  forQty?: SortOrder;
  groupSameItems?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  ignorePricingRule?: SortOrder;
  materialRequest?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  namingSeries?: SortOrder;
  owner?: SortOrder;
  parentWarehouse?: SortOrder;
  pickManually?: SortOrder;
  promptQty?: SortOrder;
  purpose?: SortOrder;
  scanBarcode?: SortOrder;
  scanMode?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  workOrder?: SortOrder;
};
