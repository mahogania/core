import { DataImport as TDataImport } from "../api/dataImport/DataImport";

export const DATAIMPORT_TITLE_FIELD = "name";

export const DataImportTitle = (record: TDataImport): string => {
  return record.name?.toString() || String(record.id);
};
