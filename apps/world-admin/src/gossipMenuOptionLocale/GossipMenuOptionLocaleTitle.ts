import { GossipMenuOptionLocale as TGossipMenuOptionLocale } from "../api/gossipMenuOptionLocale/GossipMenuOptionLocale";

export const GOSSIPMENUOPTIONLOCALE_TITLE_FIELD = "id";

export const GossipMenuOptionLocaleTitle = (
  record: TGossipMenuOptionLocale
): string => {
  return record.id?.toString() || String(record.id);
};
