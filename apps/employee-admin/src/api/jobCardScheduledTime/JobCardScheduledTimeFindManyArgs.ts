import { JobCardScheduledTimeWhereInput } from "./JobCardScheduledTimeWhereInput";
import { JobCardScheduledTimeOrderByInput } from "./JobCardScheduledTimeOrderByInput";

export type JobCardScheduledTimeFindManyArgs = {
  where?: JobCardScheduledTimeWhereInput;
  orderBy?: Array<JobCardScheduledTimeOrderByInput>;
  skip?: number;
  take?: number;
};
