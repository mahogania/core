import { ProductionPlanItemWhereInput } from "./ProductionPlanItemWhereInput";
import { ProductionPlanItemOrderByInput } from "./ProductionPlanItemOrderByInput";

export type ProductionPlanItemFindManyArgs = {
  where?: ProductionPlanItemWhereInput;
  orderBy?: Array<ProductionPlanItemOrderByInput>;
  skip?: number;
  take?: number;
};
