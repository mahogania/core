import { TbClreDedPrcDclr as TTbClreDedPrcDclr } from "../api/tbClreDedPrcDclr/TbClreDedPrcDclr";

export const TBCLREDEDPRCDCLR_TITLE_FIELD = "adcstPuchCmisYn";

export const TbClreDedPrcDclrTitle = (record: TTbClreDedPrcDclr): string => {
  return record.adcstPuchCmisYn?.toString() || String(record.id);
};
