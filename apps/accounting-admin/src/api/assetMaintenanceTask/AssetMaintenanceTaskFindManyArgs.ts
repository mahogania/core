import { AssetMaintenanceTaskWhereInput } from "./AssetMaintenanceTaskWhereInput";
import { AssetMaintenanceTaskOrderByInput } from "./AssetMaintenanceTaskOrderByInput";

export type AssetMaintenanceTaskFindManyArgs = {
  where?: AssetMaintenanceTaskWhereInput;
  orderBy?: Array<AssetMaintenanceTaskOrderByInput>;
  skip?: number;
  take?: number;
};
