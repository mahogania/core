export type PosInvoiceMergeLogUpdateInput = {
  amendedFrom?: string | null;
  consolidatedCreditNote?: string | null;
  consolidatedInvoice?: string | null;
  creation?: Date | null;
  customer?: string | null;
  customerGroup?: string | null;
  docStatus?: number | null;
  idx?: number | null;
  mergeInvoicesBasedOn?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  owner?: string | null;
  posClosingEntry?: string | null;
  postingDate?: Date | null;
  postingTime?: Date | null;
};
