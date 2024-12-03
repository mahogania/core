import { AssetCapitalizationServiceItemWhereInput } from "./AssetCapitalizationServiceItemWhereInput";
import { AssetCapitalizationServiceItemOrderByInput } from "./AssetCapitalizationServiceItemOrderByInput";

export type AssetCapitalizationServiceItemFindManyArgs = {
  where?: AssetCapitalizationServiceItemWhereInput;
  orderBy?: Array<AssetCapitalizationServiceItemOrderByInput>;
  skip?: number;
  take?: number;
};
