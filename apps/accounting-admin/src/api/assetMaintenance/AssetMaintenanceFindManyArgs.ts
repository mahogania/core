import { AssetMaintenanceWhereInput } from "./AssetMaintenanceWhereInput";
import { AssetMaintenanceOrderByInput } from "./AssetMaintenanceOrderByInput";

export type AssetMaintenanceFindManyArgs = {
  where?: AssetMaintenanceWhereInput;
  orderBy?: Array<AssetMaintenanceOrderByInput>;
  skip?: number;
  take?: number;
};
