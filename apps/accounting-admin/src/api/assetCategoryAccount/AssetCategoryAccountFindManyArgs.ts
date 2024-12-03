import { AssetCategoryAccountWhereInput } from "./AssetCategoryAccountWhereInput";
import { AssetCategoryAccountOrderByInput } from "./AssetCategoryAccountOrderByInput";

export type AssetCategoryAccountFindManyArgs = {
  where?: AssetCategoryAccountWhereInput;
  orderBy?: Array<AssetCategoryAccountOrderByInput>;
  skip?: number;
  take?: number;
};
