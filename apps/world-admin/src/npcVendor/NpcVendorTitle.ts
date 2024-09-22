import { NpcVendor as TNpcVendor } from "../api/npcVendor/NpcVendor";

export const NPCVENDOR_TITLE_FIELD = "id";

export const NpcVendorTitle = (record: TNpcVendor): string => {
  return record.id?.toString() || String(record.id);
};
