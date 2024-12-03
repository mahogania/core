import { JobCardOperationWhereInput } from "./JobCardOperationWhereInput";
import { JobCardOperationOrderByInput } from "./JobCardOperationOrderByInput";

export type JobCardOperationFindManyArgs = {
  where?: JobCardOperationWhereInput;
  orderBy?: Array<JobCardOperationOrderByInput>;
  skip?: number;
  take?: number;
};
