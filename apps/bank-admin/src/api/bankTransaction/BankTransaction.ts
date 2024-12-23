export type BankTransaction = {
  allocatedAmount: number | null;
  amendedFrom: string | null;
  bankAccount: string | null;
  bankPartyAccountNumber: string | null;
  bankPartyIban: string | null;
  bankPartyName: string | null;
  company: string | null;
  createdAt: Date;
  creation: Date | null;
  currency: string | null;
  date: Date | null;
  deposit: number | null;
  description: string | null;
  docstatus: number | null;
  id: string;
  idx: number | null;
  modified: Date | null;
  modifiedBy: string | null;
  name: string | null;
  namingSeries: string | null;
  owner: string | null;
  party: string | null;
  partyType: string | null;
  referenceNumber: string | null;
  status: string | null;
  transactionId: string | null;
  transactionType: string | null;
  unallocatedAmount: number | null;
  updatedAt: Date;
  withdrawal: number | null;
};
