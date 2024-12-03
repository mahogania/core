import { ShippingRule as TShippingRule } from "../api/shippingRule/ShippingRule";

export const SHIPPINGRULE_TITLE_FIELD = "name";

export const ShippingRuleTitle = (record: TShippingRule): string => {
  return record.name?.toString() || String(record.id);
};
