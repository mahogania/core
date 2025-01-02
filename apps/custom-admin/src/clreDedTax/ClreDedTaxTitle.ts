import { ClreDedTax as TClreDedTax } from "../api/clreDedTax/ClreDedTax";

export const CLREDEDTAX_TITLE_FIELD = "delYn";

export const ClreDedTaxTitle = (record: TClreDedTax): string => {
  return record.delYn?.toString() || String(record.id);
};
