import { AdvanceTax as TAdvanceTax } from "../api/advanceTax/AdvanceTax";

export const ADVANCETAX_TITLE_FIELD = "name";

export const AdvanceTaxTitle = (record: TAdvanceTax): string => {
  return record.name?.toString() || String(record.id);
};
