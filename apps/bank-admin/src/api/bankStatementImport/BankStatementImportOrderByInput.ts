import { SortOrder } from "../../util/SortOrder";

export type BankStatementImportOrderByInput = {
  bank?: SortOrder;
  bankAccount?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  customDelimiters?: SortOrder;
  delimiterOptions?: SortOrder;
  docstatus?: SortOrder;
  googleSheetsUrl?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  importFile?: SortOrder;
  importType?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  muteEmails?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  referenceDoctype?: SortOrder;
  showFailedLogs?: SortOrder;
  status?: SortOrder;
  submitAfterImport?: SortOrder;
  templateOptions?: SortOrder;
  templateWarnings?: SortOrder;
  updatedAt?: SortOrder;
};
