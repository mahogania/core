import { PurchaseTaxesAndCharges as TPurchaseTaxesAndCharges } from "../api/purchaseTaxesAndCharges/PurchaseTaxesAndCharges";

export const PURCHASETAXESANDCHARGES_TITLE_FIELD = "name";

export const PurchaseTaxesAndChargesTitle = (
  record: TPurchaseTaxesAndCharges
): string => {
  return record.name?.toString() || String(record.id);
};
