export type StockReconciliationCreateInput = {
  amendedFrom?: string | null;
  company?: string | null;
  costCenter?: string | null;
  creation?: Date | null;
  differenceAmount?: number | null;
  docstatus?: number | null;
  expenseAccount?: string | null;
  idx?: number | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  namingSeries?: string | null;
  owner?: string | null;
  postingDate?: Date | null;
  postingTime?: Date | null;
  purpose?: string | null;
  scanBarcode?: string | null;
  scanMode?: boolean | null;
  setPostingTime?: boolean | null;
  setWarehouse?: string | null;
};