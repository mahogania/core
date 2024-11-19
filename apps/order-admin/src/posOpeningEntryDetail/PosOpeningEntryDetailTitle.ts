import { PosOpeningEntryDetail as TPosOpeningEntryDetail } from "../api/posOpeningEntryDetail/PosOpeningEntryDetail";

export const POSOPENINGENTRYDETAIL_TITLE_FIELD = "name";

export const PosOpeningEntryDetailTitle = (
  record: TPosOpeningEntryDetail
): string => {
  return record.name?.toString() || String(record.id);
};
