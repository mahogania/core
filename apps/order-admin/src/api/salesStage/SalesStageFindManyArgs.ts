import { SalesStageWhereInput } from "./SalesStageWhereInput";
import { SalesStageOrderByInput } from "./SalesStageOrderByInput";

export type SalesStageFindManyArgs = {
  where?: SalesStageWhereInput;
  orderBy?: Array<SalesStageOrderByInput>;
  skip?: number;
  take?: number;
};
