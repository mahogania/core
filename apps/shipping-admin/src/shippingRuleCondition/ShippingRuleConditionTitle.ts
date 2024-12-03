import { ShippingRuleCondition as TShippingRuleCondition } from "../api/shippingRuleCondition/ShippingRuleCondition";

export const SHIPPINGRULECONDITION_TITLE_FIELD = "name";

export const ShippingRuleConditionTitle = (
  record: TShippingRuleCondition
): string => {
  return record.name?.toString() || String(record.id);
};
