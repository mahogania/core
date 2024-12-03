import { ProductionPlanItemReferenceWhereInput } from "./ProductionPlanItemReferenceWhereInput";
import { ProductionPlanItemReferenceOrderByInput } from "./ProductionPlanItemReferenceOrderByInput";

export type ProductionPlanItemReferenceFindManyArgs = {
  where?: ProductionPlanItemReferenceWhereInput;
  orderBy?: Array<ProductionPlanItemReferenceOrderByInput>;
  skip?: number;
  take?: number;
};
