import { InventoryDimensionWhereInput } from "./InventoryDimensionWhereInput";
import { InventoryDimensionOrderByInput } from "./InventoryDimensionOrderByInput";

export type InventoryDimensionFindManyArgs = {
  where?: InventoryDimensionWhereInput;
  orderBy?: Array<InventoryDimensionOrderByInput>;
  skip?: number;
  take?: number;
};
