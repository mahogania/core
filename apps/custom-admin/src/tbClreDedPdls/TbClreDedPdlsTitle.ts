import { TbClreDedPdls as TTbClreDedPdls } from "../api/tbClreDedPdls/TbClreDedPdls";

export const TBCLREDEDPDLS_TITLE_FIELD = "aditTxQtyUtCd";

export const TbClreDedPdlsTitle = (record: TTbClreDedPdls): string => {
  return record.aditTxQtyUtCd?.toString() || String(record.id);
};
