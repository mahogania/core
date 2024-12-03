import { SubscriptionPlan as TSubscriptionPlan } from "../api/subscriptionPlan/SubscriptionPlan";

export const SUBSCRIPTIONPLAN_TITLE_FIELD = "id";

export const SubscriptionPlanTitle = (record: TSubscriptionPlan): string => {
  return record.id?.toString() || String(record.id);
};
