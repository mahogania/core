import { SortOrder } from "../../util/SortOrder";

export type DataImportOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
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
  payloadCount?: SortOrder;
  referenceDoctype?: SortOrder;
  showFailedLogs?: SortOrder;
  status?: SortOrder;
  submitAfterImport?: SortOrder;
  templateOptions?: SortOrder;
  templateWarnings?: SortOrder;
  updatedAt?: SortOrder;
};
