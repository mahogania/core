import { ClreDedVhcl as TClreDedVhcl } from "../api/clreDedVhcl/ClreDedVhcl";

export const CLREDEDVHCL_TITLE_FIELD = "caboNm";

export const ClreDedVhclTitle = (record: TClreDedVhcl): string => {
  return record.caboNm?.toString() || String(record.id);
};
