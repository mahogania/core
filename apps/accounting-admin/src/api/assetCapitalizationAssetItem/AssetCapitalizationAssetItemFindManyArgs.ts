import { AssetCapitalizationAssetItemWhereInput } from "./AssetCapitalizationAssetItemWhereInput";
import { AssetCapitalizationAssetItemOrderByInput } from "./AssetCapitalizationAssetItemOrderByInput";

export type AssetCapitalizationAssetItemFindManyArgs = {
  where?: AssetCapitalizationAssetItemWhereInput;
  orderBy?: Array<AssetCapitalizationAssetItemOrderByInput>;
  skip?: number;
  take?: number;
};
