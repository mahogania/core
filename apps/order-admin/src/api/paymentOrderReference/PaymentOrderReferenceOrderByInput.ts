import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderReferenceOrderByInput = {
  account?: SortOrder;
  amount?: SortOrder;
  bankAccount?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modeOfPayment?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  paymentReference?: SortOrder;
  paymentRequest?: SortOrder;
  referenceDoctype?: SortOrder;
  referenceName?: SortOrder;
  supplier?: SortOrder;
  updatedAt?: SortOrder;
};
