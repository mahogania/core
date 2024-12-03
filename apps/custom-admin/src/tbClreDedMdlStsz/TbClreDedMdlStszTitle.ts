import { TbClreDedMdlStsz as TTbClreDedMdlStsz } from "../api/tbClreDedMdlStsz/TbClreDedMdlStsz";

export const TBCLREDEDMDLSTSZ_TITLE_FIELD = "cachCurrCd";

export const TbClreDedMdlStszTitle = (record: TTbClreDedMdlStsz): string => {
  return record.cachCurrCd?.toString() || String(record.id);
};
