import { NpcText as TNpcText } from "../api/npcText/NpcText";

export const NPCTEXT_TITLE_FIELD = "id";

export const NpcTextTitle = (record: TNpcText): string => {
  return record.id?.toString() || String(record.id);
};
