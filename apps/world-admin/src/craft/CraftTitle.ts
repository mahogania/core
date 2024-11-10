import { Craft as TCraft } from "../api/craft/Craft";

export const CRAFT_TITLE_FIELD = "id";

export const CraftTitle = (record: TCraft): string => {
  return record.id?.toString() || String(record.id);
};
