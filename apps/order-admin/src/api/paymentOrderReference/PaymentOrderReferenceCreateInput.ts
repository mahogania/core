export type PaymentOrderReferenceCreateInput = {
  account?: string | null;
  amount?: number | null;
  bankAccount?: string | null;
  creation?: Date | null;
  docstatus?: number | null;
  idx?: number | null;
  modeOfPayment?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  owner?: string | null;
  parent?: string | null;
  parentfield?: string | null;
  parenttype?: string | null;
  paymentReference?: string | null;
  paymentRequest?: string | null;
  referenceDoctype?: string | null;
  referenceName?: string | null;
  supplier?: string | null;
};
