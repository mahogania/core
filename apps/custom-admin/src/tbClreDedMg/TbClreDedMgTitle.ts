import { TbClreDedMg as TTbClreDedMg } from "../api/tbClreDedMg/TbClreDedMg";

export const TBCLREDEDMG_TITLE_FIELD = "delYn";

export const TbClreDedMgTitle = (record: TTbClreDedMg): string => {
  return record.delYn?.toString() || String(record.id);
};
