import { ClreDedVlutPdl as TClreDedVlutPdl } from "../api/clreDedVlutPdl/ClreDedVlutPdl";

export const CLREDEDVLUTPDL_TITLE_FIELD = "delYn";

export const ClreDedVlutPdlTitle = (record: TClreDedVlutPdl): string => {
  return record.delYn?.toString() || String(record.id);
};
