import { SortOrder } from "../../util/SortOrder";

export type AssetRepairOrderByInput = {
  actionsPerformed?: SortOrder;
  amendedFrom?: SortOrder;
  asset?: SortOrder;
  assetName?: SortOrder;
  capitalizeRepairCost?: SortOrder;
  company?: SortOrder;
  completionDate?: SortOrder;
  costCenter?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  description?: SortOrder;
  docstatus?: SortOrder;
  downtime?: SortOrder;
  failureDate?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  increaseInAssetLife?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  namingSeries?: SortOrder;
  owner?: SortOrder;
  project?: SortOrder;
  purchaseInvoice?: SortOrder;
  repairCost?: SortOrder;
  repairStatus?: SortOrder;
  stockConsumption?: SortOrder;
  totalRepairCost?: SortOrder;
  updatedAt?: SortOrder;
};