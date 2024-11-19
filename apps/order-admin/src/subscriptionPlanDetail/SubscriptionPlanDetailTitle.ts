import { SubscriptionPlanDetail as TSubscriptionPlanDetail } from "../api/subscriptionPlanDetail/SubscriptionPlanDetail";

export const SUBSCRIPTIONPLANDETAIL_TITLE_FIELD = "id";

export const SubscriptionPlanDetailTitle = (
  record: TSubscriptionPlanDetail
): string => {
  return record.id?.toString() || String(record.id);
};
