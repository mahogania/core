import { TbClreDedCntr as TTbClreDedCntr } from "../api/tbClreDedCntr/TbClreDedCntr";

export const TBCLREDEDCNTR_TITLE_FIELD = "cntrNo";

export const TbClreDedCntrTitle = (record: TTbClreDedCntr): string => {
  return record.cntrNo?.toString() || String(record.id);
};
