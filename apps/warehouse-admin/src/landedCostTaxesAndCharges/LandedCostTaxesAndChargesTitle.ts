import { LandedCostTaxesAndCharges as TLandedCostTaxesAndCharges } from "../api/landedCostTaxesAndCharges/LandedCostTaxesAndCharges";

export const LANDEDCOSTTAXESANDCHARGES_TITLE_FIELD = "name";

export const LandedCostTaxesAndChargesTitle = (
  record: TLandedCostTaxesAndCharges
): string => {
  return record.name?.toString() || String(record.id);
};
