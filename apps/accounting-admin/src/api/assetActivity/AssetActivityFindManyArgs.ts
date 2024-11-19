import { AssetActivityWhereInput } from "./AssetActivityWhereInput";
import { AssetActivityOrderByInput } from "./AssetActivityOrderByInput";

export type AssetActivityFindManyArgs = {
  where?: AssetActivityWhereInput;
  orderBy?: Array<AssetActivityOrderByInput>;
  skip?: number;
  take?: number;
};
