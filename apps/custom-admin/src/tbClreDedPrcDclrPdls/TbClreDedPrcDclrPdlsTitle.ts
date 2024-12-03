import { TbClreDedPrcDclrPdls as TTbClreDedPrcDclrPdls } from "../api/tbClreDedPrcDclrPdls/TbClreDedPrcDclrPdls";

export const TBCLREDEDPRCDCLRPDLS_TITLE_FIELD = "delYn";

export const TbClreDedPrcDclrPdlsTitle = (
  record: TTbClreDedPrcDclrPdls
): string => {
  return record.delYn?.toString() || String(record.id);
};
