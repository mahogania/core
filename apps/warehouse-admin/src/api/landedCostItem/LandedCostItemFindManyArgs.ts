import { LandedCostItemWhereInput } from "./LandedCostItemWhereInput";
import { LandedCostItemOrderByInput } from "./LandedCostItemOrderByInput";

export type LandedCostItemFindManyArgs = {
  where?: LandedCostItemWhereInput;
  orderBy?: Array<LandedCostItemOrderByInput>;
  skip?: number;
  take?: number;
};
