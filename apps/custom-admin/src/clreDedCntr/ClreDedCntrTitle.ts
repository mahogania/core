import { ClreDedCntr as TClreDedCntr } from "../api/clreDedCntr/ClreDedCntr";

export const CLREDEDCNTR_TITLE_FIELD = "cntrNo";

export const ClreDedCntrTitle = (record: TClreDedCntr): string => {
  return record.cntrNo?.toString() || String(record.id);
};
