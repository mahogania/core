import { ClreDedMg as TClreDedMg } from "../api/clreDedMg/ClreDedMg";

export const CLREDEDMG_TITLE_FIELD = "delYn";

export const ClreDedMgTitle = (record: TClreDedMg): string => {
  return record.delYn?.toString() || String(record.id);
};
