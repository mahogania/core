import { ClreDedPrcDclrPdl as TClreDedPrcDclrPdl } from "../api/clreDedPrcDclrPdl/ClreDedPrcDclrPdl";

export const CLREDEDPRCDCLRPDL_TITLE_FIELD = "delYn";

export const ClreDedPrcDclrPdlTitle = (record: TClreDedPrcDclrPdl): string => {
  return record.delYn?.toString() || String(record.id);
};
