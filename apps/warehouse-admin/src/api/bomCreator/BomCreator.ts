export type BomCreator = {
  amendedFrom: string | null;
  buyingPriceList: string | null;
  company: string | null;
  conversionRate: number | null;
  createdAt: Date;
  creation: Date | null;
  currency: string | null;
  defaultWarehouse: string | null;
  docstatus: number | null;
  errorLog: string | null;
  id: string;
  idx: number | null;
  itemCode: string | null;
  itemGroup: string | null;
  itemName: string | null;
  modified: Date | null;
  modifiedBy: string | null;
  name: string | null;
  owner: string | null;
  plcConversionRate: number | null;
  priceListCurrency: string | null;
  project: string | null;
  qty: number | null;
  rawMaterialCost: number | null;
  remarks: string | null;
  rmCostAsPer: string | null;
  setRateBasedOnWarehouse: boolean | null;
  status: string | null;
  uom: string | null;
  updatedAt: Date;
};