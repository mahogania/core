import { AssetMaintenanceLogWhereInput } from "./AssetMaintenanceLogWhereInput";
import { AssetMaintenanceLogOrderByInput } from "./AssetMaintenanceLogOrderByInput";

export type AssetMaintenanceLogFindManyArgs = {
  where?: AssetMaintenanceLogWhereInput;
  orderBy?: Array<AssetMaintenanceLogOrderByInput>;
  skip?: number;
  take?: number;
};
