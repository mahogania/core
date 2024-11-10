export type ItemReorder = {
  createdAt: Date;
  docstatus: number | null;
  id: string;
  idx: number | null;
  materialRequestType: string | null;
  name: string | null;
  owner: string | null;
  parent: string | null;
  parentfield: string | null;
  parenttype: string | null;
  updatedAt: Date;
  warehouse: string | null;
  warehouseGroup: string | null;
  warehouseReorderLevel: number | null;
  warehouseReorderQty: number | null;
};
