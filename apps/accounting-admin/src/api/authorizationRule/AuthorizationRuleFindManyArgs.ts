import { AuthorizationRuleWhereInput } from "./AuthorizationRuleWhereInput";
import { AuthorizationRuleOrderByInput } from "./AuthorizationRuleOrderByInput";

export type AuthorizationRuleFindManyArgs = {
  where?: AuthorizationRuleWhereInput;
  orderBy?: Array<AuthorizationRuleOrderByInput>;
  skip?: number;
  take?: number;
};
