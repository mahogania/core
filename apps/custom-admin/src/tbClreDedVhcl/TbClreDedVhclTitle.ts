import { TbClreDedVhcl as TTbClreDedVhcl } from "../api/tbClreDedVhcl/TbClreDedVhcl";

export const TBCLREDEDVHCL_TITLE_FIELD = "caboNm";

export const TbClreDedVhclTitle = (record: TTbClreDedVhcl): string => {
  return record.caboNm?.toString() || String(record.id);
};
