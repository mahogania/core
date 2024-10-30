import { AssetCategoryWhereInput } from "./AssetCategoryWhereInput";
import { AssetCategoryOrderByInput } from "./AssetCategoryOrderByInput";

export type AssetCategoryFindManyArgs = {
  where?: AssetCategoryWhereInput;
  orderBy?: Array<AssetCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
