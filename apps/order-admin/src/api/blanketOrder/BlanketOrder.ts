export type BlanketOrder = {
  amendedFrom: string | null;
  blanketOrderType: string | null;
  company: string | null;
  createdAt: Date;
  creation: Date | null;
  customer: string | null;
  customerName: string | null;
  docstatus: number | null;
  fromDate: Date | null;
  id: string;
  idx: number | null;
  modified: Date | null;
  modifiedBy: string | null;
  name: string | null;
  namingSeries: string | null;
  owner: string | null;
  supplier: string | null;
  supplierName: string | null;
  tcName: string | null;
  terms: string | null;
  toDate: Date | null;
  updatedAt: Date;
};
