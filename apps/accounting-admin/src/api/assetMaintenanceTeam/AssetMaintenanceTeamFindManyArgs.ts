import { AssetMaintenanceTeamWhereInput } from "./AssetMaintenanceTeamWhereInput";
import { AssetMaintenanceTeamOrderByInput } from "./AssetMaintenanceTeamOrderByInput";

export type AssetMaintenanceTeamFindManyArgs = {
  where?: AssetMaintenanceTeamWhereInput;
  orderBy?: Array<AssetMaintenanceTeamOrderByInput>;
  skip?: number;
  take?: number;
};
