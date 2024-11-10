import { SortOrder } from "../../util/SortOrder";

export type ItemBarcodeOrderByInput = {
  barcode?: SortOrder;
  barcodeType?: SortOrder;
  createdAt?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  uom?: SortOrder;
  updatedAt?: SortOrder;
};
