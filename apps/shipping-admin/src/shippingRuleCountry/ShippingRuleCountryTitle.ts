import { ShippingRuleCountry as TShippingRuleCountry } from "../api/shippingRuleCountry/ShippingRuleCountry";

export const SHIPPINGRULECOUNTRY_TITLE_FIELD = "name";

export const ShippingRuleCountryTitle = (
  record: TShippingRuleCountry
): string => {
  return record.name?.toString() || String(record.id);
};
