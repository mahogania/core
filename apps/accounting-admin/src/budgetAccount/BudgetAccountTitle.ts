import { BudgetAccount as TBudgetAccount } from "../api/budgetAccount/BudgetAccount";

export const BUDGETACCOUNT_TITLE_FIELD = "name";

export const BudgetAccountTitle = (record: TBudgetAccount): string => {
  return record.name?.toString() || String(record.id);
};
