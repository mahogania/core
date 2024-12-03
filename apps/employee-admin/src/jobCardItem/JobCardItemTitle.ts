import { JobCardItem as TJobCardItem } from "../api/jobCardItem/JobCardItem";

export const JOBCARDITEM_TITLE_FIELD = "itemName";

export const JobCardItemTitle = (record: TJobCardItem): string => {
  return record.itemName?.toString() || String(record.id);
};
