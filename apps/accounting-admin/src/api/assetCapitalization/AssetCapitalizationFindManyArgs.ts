import { AssetCapitalizationWhereInput } from "./AssetCapitalizationWhereInput";
import { AssetCapitalizationOrderByInput } from "./AssetCapitalizationOrderByInput";

export type AssetCapitalizationFindManyArgs = {
  where?: AssetCapitalizationWhereInput;
  orderBy?: Array<AssetCapitalizationOrderByInput>;
  skip?: number;
  take?: number;
};
