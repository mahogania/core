import { ClreDedComn as TClreDedComn } from "../api/clreDedComn/ClreDedComn";

export const CLREDEDCOMN_TITLE_FIELD = "aditTxQtyUtCd";

export const ClreDedComnTitle = (record: TClreDedComn): string => {
  return record.aditTxQtyUtCd?.toString() || String(record.id);
};
