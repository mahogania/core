import { ActivityTypeWhereInput } from "./ActivityTypeWhereInput";
import { ActivityTypeOrderByInput } from "./ActivityTypeOrderByInput";

export type ActivityTypeFindManyArgs = {
  where?: ActivityTypeWhereInput;
  orderBy?: Array<ActivityTypeOrderByInput>;
  skip?: number;
  take?: number;
};
