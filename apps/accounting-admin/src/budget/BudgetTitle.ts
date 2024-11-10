import { Budget as TBudget } from "../api/budget/Budget";

export const BUDGET_TITLE_FIELD = "name";

export const BudgetTitle = (record: TBudget): string => {
  return record.name?.toString() || String(record.id);
};
