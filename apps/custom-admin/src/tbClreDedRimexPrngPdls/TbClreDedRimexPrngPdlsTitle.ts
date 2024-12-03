import { TbClreDedRimexPrngPdls as TTbClreDedRimexPrngPdls } from "../api/tbClreDedRimexPrngPdls/TbClreDedRimexPrngPdls";

export const TBCLREDEDRIMEXPRNGPDLS_TITLE_FIELD = "cmdtClsfSpelCd";

export const TbClreDedRimexPrngPdlsTitle = (
  record: TTbClreDedRimexPrngPdls
): string => {
  return record.cmdtClsfSpelCd?.toString() || String(record.id);
};
