import { AdvanceTaxesAndCharges as TAdvanceTaxesAndCharges } from "../api/advanceTaxesAndCharges/AdvanceTaxesAndCharges";

export const ADVANCETAXESANDCHARGES_TITLE_FIELD = "name";

export const AdvanceTaxesAndChargesTitle = (
  record: TAdvanceTaxesAndCharges
): string => {
  return record.name?.toString() || String(record.id);
};
