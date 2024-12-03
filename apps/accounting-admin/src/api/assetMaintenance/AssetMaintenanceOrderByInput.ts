import { SortOrder } from "../../util/SortOrder";

export type AssetMaintenanceOrderByInput = {
  assetCategory?: SortOrder;
  assetName?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  itemCode?: SortOrder;
  itemName?: SortOrder;
  maintenanceManager?: SortOrder;
  maintenanceManagerName?: SortOrder;
  maintenanceTeam?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  updatedAt?: SortOrder;
};
