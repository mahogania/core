import { DataImportWhereUniqueInput } from "../dataImport/DataImportWhereUniqueInput";

export type DataImportLogUpdateInput = {
  creation?: Date | null;
  dataImport?: DataImportWhereUniqueInput | null;
  docname?: string | null;
  docstatus?: number | null;
  exception?: string | null;
  idx?: number | null;
  logIndex?: number | null;
  messages?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  owner?: string | null;
  rowIndexes?: string | null;
  success?: number | null;
};
