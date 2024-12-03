import { TbClreDedCo as TTbClreDedCo } from "../api/tbClreDedCo/TbClreDedCo";

export const TBCLREDEDCO_TITLE_FIELD = "dcerAddr";

export const TbClreDedCoTitle = (record: TTbClreDedCo): string => {
  return record.dcerAddr?.toString() || String(record.id);
};
