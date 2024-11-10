import { DataImportLogUpdateManyWithoutDataImportsInput } from "./DataImportLogUpdateManyWithoutDataImportsInput";

export type DataImportUpdateInput = {
  creation?: Date | null;
  dataImportLogs?: DataImportLogUpdateManyWithoutDataImportsInput;
  docstatus?: number | null;
  googleSheetsUrl?: string | null;
  idx?: number | null;
  importFile?: string | null;
  importType?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  muteEmails?: number | null;
  name?: string | null;
  owner?: string | null;
  payloadCount?: number | null;
  referenceDoctype?: string | null;
  showFailedLogs?: number | null;
  status?: string | null;
  submitAfterImport?: number | null;
  templateOptions?: string | null;
  templateWarnings?: string | null;
};
