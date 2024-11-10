import { SortOrder } from "../../util/SortOrder";

export type InvoiceDiscountingOrderByInput = {
  accountsReceivableCredit?: SortOrder;
  accountsReceivableDiscounted?: SortOrder;
  accountsReceivableUnpaid?: SortOrder;
  amendedFrom?: SortOrder;
  bankAccount?: SortOrder;
  bankCharges?: SortOrder;
  bankChargesAccount?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  loanEndDate?: SortOrder;
  loanPeriod?: SortOrder;
  loanStartDate?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  postingDate?: SortOrder;
  shortTermLoan?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
