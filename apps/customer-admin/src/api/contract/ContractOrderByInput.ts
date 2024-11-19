import { SortOrder } from "../../util/SortOrder";

export type ContractOrderByInput = {
  amendedFrom?: SortOrder;
  contractTemplate?: SortOrder;
  contractTerms?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  documentName?: SortOrder;
  documentType?: SortOrder;
  endDate?: SortOrder;
  fulfilmentDeadline?: SortOrder;
  fulfilmentStatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  ipAddress?: SortOrder;
  isSigned?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  partyName?: SortOrder;
  partyType?: SortOrder;
  partyUser?: SortOrder;
  requiresFulfilment?: SortOrder;
  signedByCompany?: SortOrder;
  signedOn?: SortOrder;
  signee?: SortOrder;
  signeeCompany?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};