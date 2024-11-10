import { EmailRuleWhereInput } from "./EmailRuleWhereInput";
import { EmailRuleOrderByInput } from "./EmailRuleOrderByInput";

export type EmailRuleFindManyArgs = {
  where?: EmailRuleWhereInput;
  orderBy?: Array<EmailRuleOrderByInput>;
  skip?: number;
  take?: number;
};
