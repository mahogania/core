import { ClreDedCo as TClreDedCo } from "../api/clreDedCo/ClreDedCo";

export const CLREDEDCO_TITLE_FIELD = "dcerAddr";

export const ClreDedCoTitle = (record: TClreDedCo): string => {
  return record.dcerAddr?.toString() || String(record.id);
};
