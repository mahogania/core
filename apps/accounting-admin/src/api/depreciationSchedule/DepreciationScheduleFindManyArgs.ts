import { DepreciationScheduleWhereInput } from "./DepreciationScheduleWhereInput";
import { DepreciationScheduleOrderByInput } from "./DepreciationScheduleOrderByInput";

export type DepreciationScheduleFindManyArgs = {
  where?: DepreciationScheduleWhereInput;
  orderBy?: Array<DepreciationScheduleOrderByInput>;
  skip?: number;
  take?: number;
};
