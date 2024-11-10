import { AssetCapitalizationStockItemWhereInput } from "./AssetCapitalizationStockItemWhereInput";
import { AssetCapitalizationStockItemOrderByInput } from "./AssetCapitalizationStockItemOrderByInput";

export type AssetCapitalizationStockItemFindManyArgs = {
  where?: AssetCapitalizationStockItemWhereInput;
  orderBy?: Array<AssetCapitalizationStockItemOrderByInput>;
  skip?: number;
  take?: number;
};
