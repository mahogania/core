import { ShippingRuleConditionWhereInput } from "./ShippingRuleConditionWhereInput";
import { ShippingRuleConditionOrderByInput } from "./ShippingRuleConditionOrderByInput";

export type ShippingRuleConditionFindManyArgs = {
  where?: ShippingRuleConditionWhereInput;
  orderBy?: Array<ShippingRuleConditionOrderByInput>;
  skip?: number;
  take?: number;
};
