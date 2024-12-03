import { JobCardWhereInput } from "./JobCardWhereInput";
import { JobCardOrderByInput } from "./JobCardOrderByInput";

export type JobCardFindManyArgs = {
  where?: JobCardWhereInput;
  orderBy?: Array<JobCardOrderByInput>;
  skip?: number;
  take?: number;
};
