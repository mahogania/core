import { ProductionPlanSubAssemblyItemWhereInput } from "./ProductionPlanSubAssemblyItemWhereInput";
import { ProductionPlanSubAssemblyItemOrderByInput } from "./ProductionPlanSubAssemblyItemOrderByInput";

export type ProductionPlanSubAssemblyItemFindManyArgs = {
  where?: ProductionPlanSubAssemblyItemWhereInput;
  orderBy?: Array<ProductionPlanSubAssemblyItemOrderByInput>;
  skip?: number;
  take?: number;
};
