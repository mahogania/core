import { SortOrder } from "../../util/SortOrder";

export type BatchOrderByInput = {
  batchId?: SortOrder;
  batchQty?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  disabled?: SortOrder;
  docstatus?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  image?: SortOrder;
  item?: SortOrder;
  itemName?: SortOrder;
  manufacturingDate?: SortOrder;
  owner?: SortOrder;
  parentBatch?: SortOrder;
  producedQty?: SortOrder;
  qtyToProduce?: SortOrder;
  referenceDoctype?: SortOrder;
  referenceName?: SortOrder;
  stockUom?: SortOrder;
  supplier?: SortOrder;
  updatedAt?: SortOrder;
  useBatchwiseValuation?: SortOrder;
};
