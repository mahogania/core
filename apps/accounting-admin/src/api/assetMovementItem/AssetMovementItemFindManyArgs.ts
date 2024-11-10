import { AssetMovementItemWhereInput } from "./AssetMovementItemWhereInput";
import { AssetMovementItemOrderByInput } from "./AssetMovementItemOrderByInput";

export type AssetMovementItemFindManyArgs = {
  where?: AssetMovementItemWhereInput;
  orderBy?: Array<AssetMovementItemOrderByInput>;
  skip?: number;
  take?: number;
};
