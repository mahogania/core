import { ClreDedPdls as TClreDedPdls } from "../api/clreDedPdls/ClreDedPdls";

export const CLREDEDPDLS_TITLE_FIELD = "aditTxQtyUtCd";

export const ClreDedPdlsTitle = (record: TClreDedPdls): string => {
  return record.aditTxQtyUtCd?.toString() || String(record.id);
};
