import { ClreDedRimexPrngPdl as TClreDedRimexPrngPdl } from "../api/clreDedRimexPrngPdl/ClreDedRimexPrngPdl";

export const CLREDEDRIMEXPRNGPDL_TITLE_FIELD = "cmdtClsfSpelCd";

export const ClreDedRimexPrngPdlTitle = (
  record: TClreDedRimexPrngPdl
): string => {
  return record.cmdtClsfSpelCd?.toString() || String(record.id);
};
