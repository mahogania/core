export type LedgerHealth = {
  checkedOn: Date | null;
  createdAt: Date;
  creation: Date | null;
  debitCreditMismatch: number | null;
  docstatus: number | null;
  generalAndPaymentLedgerMismatch: number | null;
  id: string;
  idx: number | null;
  modified: Date | null;
  modifiedBy: string | null;
  name: number | null;
  owner: string | null;
  updatedAt: Date;
  voucherNo: string | null;
  voucherType: string | null;
};
