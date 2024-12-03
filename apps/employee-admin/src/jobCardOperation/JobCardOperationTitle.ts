import { JobCardOperation as TJobCardOperation } from "../api/jobCardOperation/JobCardOperation";

export const JOBCARDOPERATION_TITLE_FIELD = "name";

export const JobCardOperationTitle = (record: TJobCardOperation): string => {
  return record.name?.toString() || String(record.id);
};
