import { SortOrder } from "../../util/SortOrder";

export type CallLogOrderByInput = {
  callReceivedBy?: SortOrder;
  callType?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  customer?: SortOrder;
  docstatus?: SortOrder;
  duration?: SortOrder;
  employeeUserId?: SortOrder;
  endTime?: SortOrder;
  fromField?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  medium?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  originalId?: SortOrder;
  owner?: SortOrder;
  recordingUrl?: SortOrder;
  startTime?: SortOrder;
  status?: SortOrder;
  summary?: SortOrder;
  to?: SortOrder;
  typeOfCall?: SortOrder;
  updatedAt?: SortOrder;
};
