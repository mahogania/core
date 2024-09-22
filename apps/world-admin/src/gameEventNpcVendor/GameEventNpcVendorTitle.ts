import { GameEventNpcVendor as TGameEventNpcVendor } from "../api/gameEventNpcVendor/GameEventNpcVendor";

export const GAMEEVENTNPCVENDOR_TITLE_FIELD = "id";

export const GameEventNpcVendorTitle = (
  record: TGameEventNpcVendor
): string => {
  return record.id?.toString() || String(record.id);
};
