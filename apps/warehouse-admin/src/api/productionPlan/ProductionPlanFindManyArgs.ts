import { ProductionPlanWhereInput } from "./ProductionPlanWhereInput";
import { ProductionPlanOrderByInput } from "./ProductionPlanOrderByInput";

export type ProductionPlanFindManyArgs = {
  where?: ProductionPlanWhereInput;
  orderBy?: Array<ProductionPlanOrderByInput>;
  skip?: number;
  take?: number;
};
