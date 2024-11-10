import { CostCenterAllocationWhereInput } from "./CostCenterAllocationWhereInput";
import { CostCenterAllocationOrderByInput } from "./CostCenterAllocationOrderByInput";

export type CostCenterAllocationFindManyArgs = {
  where?: CostCenterAllocationWhereInput;
  orderBy?: Array<CostCenterAllocationOrderByInput>;
  skip?: number;
  take?: number;
};
