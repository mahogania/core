import { AssetDepreciationScheduleWhereInput } from "./AssetDepreciationScheduleWhereInput";
import { AssetDepreciationScheduleOrderByInput } from "./AssetDepreciationScheduleOrderByInput";

export type AssetDepreciationScheduleFindManyArgs = {
  where?: AssetDepreciationScheduleWhereInput;
  orderBy?: Array<AssetDepreciationScheduleOrderByInput>;
  skip?: number;
  take?: number;
};
