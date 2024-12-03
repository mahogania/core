import { JobCardScheduledTime as TJobCardScheduledTime } from "../api/jobCardScheduledTime/JobCardScheduledTime";

export const JOBCARDSCHEDULEDTIME_TITLE_FIELD = "name";

export const JobCardScheduledTimeTitle = (
  record: TJobCardScheduledTime
): string => {
  return record.name?.toString() || String(record.id);
};
