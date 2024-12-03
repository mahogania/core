export type JobCardItem = {
  allowAlternativeItem: number | null;
  createdAt: Date;
  creation: Date | null;
  description: string | null;
  docstatus: number | null;
  id: string;
  idx: number | null;
  itemCode: string | null;
  itemGroup: string | null;
  itemName: string | null;
  modified: Date | null;
  modifiedBy: string | null;
  name: string | null;
  owner: string | null;
  parent: string | null;
  parentfield: string | null;
  parenttype: string | null;
  requiredQty: number | null;
  sourceWarehouse: string | null;
  stockUom: string | null;
  transferredQty: number | null;
  uom: string | null;
  updatedAt: Date;
};