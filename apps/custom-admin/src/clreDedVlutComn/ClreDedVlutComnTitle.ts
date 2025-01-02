import { ClreDedVlutComn as TClreDedVlutComn } from "../api/clreDedVlutComn/ClreDedVlutComn";

export const CLREDEDVLUTCOMN_TITLE_FIELD = "cachCurrCd";

export const ClreDedVlutComnTitle = (record: TClreDedVlutComn): string => {
  return record.cachCurrCd?.toString() || String(record.id);
};
