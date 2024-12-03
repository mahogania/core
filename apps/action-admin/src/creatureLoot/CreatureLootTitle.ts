import { CreatureLoot as TCreatureLoot } from "../api/creatureLoot/CreatureLoot";

export const CREATURELOOT_TITLE_FIELD = "itemId";

export const CreatureLootTitle = (record: TCreatureLoot): string => {
  return record.itemId?.toString() || String(record.id);
};
