import { DataImport } from "../dataImport/DataImport";

export type DataImportLog = {
  createdAt: Date;
  creation: Date | null;
  dataImport?: DataImport | null;
  docname: string | null;
  docstatus: number | null;
  exception: string | null;
  id: string;
  idx: number | null;
  logIndex: number | null;
  messages: string | null;
  modified: Date | null;
  modifiedBy: string | null;
  name: string | null;
  owner: string | null;
  rowIndexes: string | null;
  success: number | null;
  updatedAt: Date;
};
