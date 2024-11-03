import { DataImportLog as TDataImportLog } from "../api/dataImportLog/DataImportLog";

export const DATAIMPORTLOG_TITLE_FIELD = "docname";

export const DataImportLogTitle = (record: TDataImportLog): string => {
  return record.docname?.toString() || String(record.id);
};
