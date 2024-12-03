export type LedgerHealthCreateInput = {
  checkedOn?: Date | null;
  creation?: Date | null;
  debitCreditMismatch?: number | null;
  docstatus?: number | null;
  generalAndPaymentLedgerMismatch?: number | null;
  idx?: number | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: number | null;
  owner?: string | null;
  voucherNo?: string | null;
  voucherType?: string | null;
};
