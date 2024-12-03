import { SortOrder } from "../../util/SortOrder";

export type PosInvoiceReferenceOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
  customer?: SortOrder;
  docStatus?: SortOrder;
  grandTotal?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  isReturn?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentField?: SortOrder;
  parentType?: SortOrder;
  posInvoice?: SortOrder;
  postingDate?: SortOrder;
  returnAgainst?: SortOrder;
  updatedAt?: SortOrder;
};
