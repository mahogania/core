import { ShippingRuleCountryWhereInput } from "./ShippingRuleCountryWhereInput";
import { ShippingRuleCountryOrderByInput } from "./ShippingRuleCountryOrderByInput";

export type ShippingRuleCountryFindManyArgs = {
  where?: ShippingRuleCountryWhereInput;
  orderBy?: Array<ShippingRuleCountryOrderByInput>;
  skip?: number;
  take?: number;
};
