import { ShippingRuleWhereInput } from "./ShippingRuleWhereInput";
import { ShippingRuleOrderByInput } from "./ShippingRuleOrderByInput";

export type ShippingRuleFindManyArgs = {
  where?: ShippingRuleWhereInput;
  orderBy?: Array<ShippingRuleOrderByInput>;
  skip?: number;
  take?: number;
};
