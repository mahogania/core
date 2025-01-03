import { SortOrder } from "../../util/SortOrder";

export type BankGuaranteeOrderByInput = {
  account?: SortOrder;
  amendedFrom?: SortOrder;
  amount?: SortOrder;
  bank?: SortOrder;
  bankAccount?: SortOrder;
  bankAccountNo?: SortOrder;
  bankGuaranteeNumber?: SortOrder;
  bgType?: SortOrder;
  branchCode?: SortOrder;
  charges?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  customer?: SortOrder;
  docstatus?: SortOrder;
  endDate?: SortOrder;
  fixedDepositNumber?: SortOrder;
  iban?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  marginMoney?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  moreInformation?: SortOrder;
  name?: SortOrder;
  nameOfBeneficiary?: SortOrder;
  owner?: SortOrder;
  project?: SortOrder;
  referenceDocname?: SortOrder;
  referenceDoctype?: SortOrder;
  startDate?: SortOrder;
  supplier?: SortOrder;
  swiftNumber?: SortOrder;
  updatedAt?: SortOrder;
  validity?: SortOrder;
};
