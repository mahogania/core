export type DiscountedInvoiceCreateInput = {
  creation?: Date | null;
  customer?: string | null;
  debitTo?: string | null;
  docstatus?: number | null;
  idx?: number | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  outstandingAmount?: number | null;
  owner?: string | null;
  parent?: string | null;
  parentfield?: string | null;
  parenttype?: string | null;
  postingDate?: Date | null;
  salesInvoice?: string | null;
};
