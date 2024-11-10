import { FinanceBook as TFinanceBook } from "../api/financeBook/FinanceBook";

export const FINANCEBOOK_TITLE_FIELD = "financeBookName";

export const FinanceBookTitle = (record: TFinanceBook): string => {
  return record.financeBookName?.toString() || String(record.id);
};
