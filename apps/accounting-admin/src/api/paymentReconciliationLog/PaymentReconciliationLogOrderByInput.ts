import { SortOrder } from "../../util/SortOrder";

export type PaymentReconciliationLogOrderByInput = {
  allocated?: SortOrder;
  createdAt?: SortOrder;
  docstatus?: SortOrder;
  errorLog?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  processPr?: SortOrder;
  reconciled?: SortOrder;
  reconciledEntries?: SortOrder;
  status?: SortOrder;
  totalAllocations?: SortOrder;
  updatedAt?: SortOrder;
};
