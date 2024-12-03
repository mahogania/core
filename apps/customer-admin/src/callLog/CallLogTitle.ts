import { CallLog as TCallLog } from "../api/callLog/CallLog";

export const CALLLOG_TITLE_FIELD = "callReceivedBy";

export const CallLogTitle = (record: TCallLog): string => {
  return record.callReceivedBy?.toString() || String(record.id);
};
