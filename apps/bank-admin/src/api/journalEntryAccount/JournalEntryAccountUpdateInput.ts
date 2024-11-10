export type JournalEntryAccountUpdateInput = {
  account?: string | null;
  accountCurrency?: string | null;
  accountType?: string | null;
  againstAccount?: string | null;
  bankAccount?: string | null;
  costCenter?: string | null;
  creation?: Date | null;
  credit?: number | null;
  creditInAccountCurrency?: number | null;
  debit?: number | null;
  debitInAccountCurrency?: number | null;
  docstatus?: number | null;
  exchangeRate?: number | null;
  idx?: number | null;
  isAdvance?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  owner?: string | null;
  parent?: string | null;
  parentfield?: string | null;
  parenttype?: string | null;
  party?: string | null;
  partyType?: string | null;
  project?: string | null;
  referenceDetailNo?: string | null;
  referenceDueDate?: Date | null;
  referenceName?: string | null;
  referenceType?: string | null;
  userRemark?: string | null;
};