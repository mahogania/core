export type ContractUpdateInput = {
  amendedFrom?: string | null;
  contractTemplate?: string | null;
  contractTerms?: string | null;
  creation?: Date | null;
  docstatus?: number | null;
  documentName?: string | null;
  documentType?: string | null;
  endDate?: Date | null;
  fulfilmentDeadline?: Date | null;
  fulfilmentStatus?: string | null;
  idx?: number | null;
  ipAddress?: string | null;
  isSigned?: boolean | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  owner?: string | null;
  partyName?: string | null;
  partyType?: string | null;
  partyUser?: string | null;
  requiresFulfilment?: boolean | null;
  signedByCompany?: string | null;
  signedOn?: Date | null;
  signee?: string | null;
  signeeCompany?: string | null;
  startDate?: Date | null;
  status?: string | null;
};
