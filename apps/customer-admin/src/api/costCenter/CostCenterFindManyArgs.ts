import { CostCenterWhereInput } from "./CostCenterWhereInput";
import { CostCenterOrderByInput } from "./CostCenterOrderByInput";

export type CostCenterFindManyArgs = {
  where?: CostCenterWhereInput;
  orderBy?: Array<CostCenterOrderByInput>;
  skip?: number;
  take?: number;
};
