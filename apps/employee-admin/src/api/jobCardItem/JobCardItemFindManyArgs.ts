import { JobCardItemWhereInput } from "./JobCardItemWhereInput";
import { JobCardItemOrderByInput } from "./JobCardItemOrderByInput";

export type JobCardItemFindManyArgs = {
  where?: JobCardItemWhereInput;
  orderBy?: Array<JobCardItemOrderByInput>;
  skip?: number;
  take?: number;
};
