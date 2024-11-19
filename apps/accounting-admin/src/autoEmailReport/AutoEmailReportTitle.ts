import { AutoEmailReport as TAutoEmailReport } from "../api/autoEmailReport/AutoEmailReport";

export const AUTOEMAILREPORT_TITLE_FIELD = "name";

export const AutoEmailReportTitle = (record: TAutoEmailReport): string => {
  return record.name?.toString() || String(record.id);
};
