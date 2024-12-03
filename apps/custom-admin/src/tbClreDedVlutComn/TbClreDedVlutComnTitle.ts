import { TbClreDedVlutComn as TTbClreDedVlutComn } from "../api/tbClreDedVlutComn/TbClreDedVlutComn";

export const TBCLREDEDVLUTCOMN_TITLE_FIELD = "cachCurrCd";

export const TbClreDedVlutComnTitle = (record: TTbClreDedVlutComn): string => {
  return record.cachCurrCd?.toString() || String(record.id);
};
