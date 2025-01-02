import { ClreDedPrcDclr as TClreDedPrcDclr } from "../api/clreDedPrcDclr/ClreDedPrcDclr";

export const CLREDEDPRCDCLR_TITLE_FIELD = "adcstPuchCmisYn";

export const ClreDedPrcDclrTitle = (record: TClreDedPrcDclr): string => {
  return record.adcstPuchCmisYn?.toString() || String(record.id);
};
