import { TbClreDedTax as TTbClreDedTax } from "../api/tbClreDedTax/TbClreDedTax";

export const TBCLREDEDTAX_TITLE_FIELD = "delYn";

export const TbClreDedTaxTitle = (record: TTbClreDedTax): string => {
  return record.delYn?.toString() || String(record.id);
};
