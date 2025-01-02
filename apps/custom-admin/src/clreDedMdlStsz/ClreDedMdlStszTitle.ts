import { ClreDedMdlStsz as TClreDedMdlStsz } from "../api/clreDedMdlStsz/ClreDedMdlStsz";

export const CLREDEDMDLSTSZ_TITLE_FIELD = "cachCurrCd";

export const ClreDedMdlStszTitle = (record: TClreDedMdlStsz): string => {
  return record.cachCurrCd?.toString() || String(record.id);
};
