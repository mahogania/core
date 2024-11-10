export type CallLogUpdateInput = {
  callReceivedBy?: string | null;
  callType?: string | null;
  creation?: Date | null;
  customer?: string | null;
  docstatus?: number | null;
  duration?: number | null;
  employeeUserId?: string | null;
  endTime?: Date | null;
  fromField?: string | null;
  idx?: number | null;
  medium?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  originalId?: string | null;
  owner?: string | null;
  recordingUrl?: string | null;
  startTime?: Date | null;
  status?: string | null;
  summary?: string | null;
  to?: string | null;
  typeOfCall?: string | null;
};
