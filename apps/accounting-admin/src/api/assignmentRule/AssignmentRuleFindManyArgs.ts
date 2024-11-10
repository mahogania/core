import { AssignmentRuleWhereInput } from "./AssignmentRuleWhereInput";
import { AssignmentRuleOrderByInput } from "./AssignmentRuleOrderByInput";

export type AssignmentRuleFindManyArgs = {
  where?: AssignmentRuleWhereInput;
  orderBy?: Array<AssignmentRuleOrderByInput>;
  skip?: number;
  take?: number;
};
