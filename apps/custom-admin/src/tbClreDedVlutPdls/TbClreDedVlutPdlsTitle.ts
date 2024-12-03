import { TbClreDedVlutPdls as TTbClreDedVlutPdls } from "../api/tbClreDedVlutPdls/TbClreDedVlutPdls";

export const TBCLREDEDVLUTPDLS_TITLE_FIELD = "delYn";

export const TbClreDedVlutPdlsTitle = (record: TTbClreDedVlutPdls): string => {
  return record.delYn?.toString() || String(record.id);
};
