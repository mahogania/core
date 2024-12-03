import { SubscriptionPlanDetailWhereInput } from "./SubscriptionPlanDetailWhereInput";
import { SubscriptionPlanDetailOrderByInput } from "./SubscriptionPlanDetailOrderByInput";

export type SubscriptionPlanDetailFindManyArgs = {
  where?: SubscriptionPlanDetailWhereInput;
  orderBy?: Array<SubscriptionPlanDetailOrderByInput>;
  skip?: number;
  take?: number;
};
