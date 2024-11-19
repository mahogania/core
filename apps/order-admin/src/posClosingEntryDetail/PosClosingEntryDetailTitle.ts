import { PosClosingEntryDetail as TPosClosingEntryDetail } from "../api/posClosingEntryDetail/PosClosingEntryDetail";

export const POSCLOSINGENTRYDETAIL_TITLE_FIELD = "name";

export const PosClosingEntryDetailTitle = (
  record: TPosClosingEntryDetail
): string => {
  return record.name?.toString() || String(record.id);
};
