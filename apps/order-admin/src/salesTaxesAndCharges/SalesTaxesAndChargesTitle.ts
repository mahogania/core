import { SalesTaxesAndCharges as TSalesTaxesAndCharges } from "../api/salesTaxesAndCharges/SalesTaxesAndCharges";

export const SALESTAXESANDCHARGES_TITLE_FIELD = "name";

export const SalesTaxesAndChargesTitle = (
  record: TSalesTaxesAndCharges
): string => {
  return record.name?.toString() || String(record.id);
};
