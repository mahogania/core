import { TbClreDedRwms as TTbClreDedRwms } from "../api/tbClreDedRwms/TbClreDedRwms";

export const TBCLREDEDRWMS_TITLE_FIELD = "bfCmdtClsfSpelCd";

export const TbClreDedRwmsTitle = (record: TTbClreDedRwms): string => {
  return record.bfCmdtClsfSpelCd?.toString() || String(record.id);
};
