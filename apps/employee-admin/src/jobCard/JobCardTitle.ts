import { JobCard as TJobCard } from "../api/jobCard/JobCard";

export const JOBCARD_TITLE_FIELD = "itemName";

export const JobCardTitle = (record: TJobCard): string => {
  return record.itemName?.toString() || String(record.id);
};
