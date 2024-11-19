import { MaterialRequestPlanItemWhereInput } from "./MaterialRequestPlanItemWhereInput";
import { MaterialRequestPlanItemOrderByInput } from "./MaterialRequestPlanItemOrderByInput";

export type MaterialRequestPlanItemFindManyArgs = {
  where?: MaterialRequestPlanItemWhereInput;
  orderBy?: Array<MaterialRequestPlanItemOrderByInput>;
  skip?: number;
  take?: number;
};
