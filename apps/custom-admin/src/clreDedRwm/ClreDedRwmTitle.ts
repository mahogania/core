import { ClreDedRwm as TClreDedRwm } from "../api/clreDedRwm/ClreDedRwm";

export const CLREDEDRWM_TITLE_FIELD = "bfCmdtClsfSpelCd";

export const ClreDedRwmTitle = (record: TClreDedRwm): string => {
  return record.bfCmdtClsfSpelCd?.toString() || String(record.id);
};
