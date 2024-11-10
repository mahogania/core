import { SortOrder } from "../../util/SortOrder";

export type JournalEntryTemplateOrderByInput = {
  company?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  isOpening?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  multiCurrency?: SortOrder;
  namingSeries?: SortOrder;
  owner?: SortOrder;
  templateTitle?: SortOrder;
  updatedAt?: SortOrder;
  voucherType?: SortOrder;
};
