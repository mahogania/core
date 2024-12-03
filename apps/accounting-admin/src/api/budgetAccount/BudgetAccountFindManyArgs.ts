import { BudgetAccountWhereInput } from "./BudgetAccountWhereInput";
import { BudgetAccountOrderByInput } from "./BudgetAccountOrderByInput";

export type BudgetAccountFindManyArgs = {
  where?: BudgetAccountWhereInput;
  orderBy?: Array<BudgetAccountOrderByInput>;
  skip?: number;
  take?: number;
};
