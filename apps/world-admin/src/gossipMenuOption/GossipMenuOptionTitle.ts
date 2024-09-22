import { GossipMenuOption as TGossipMenuOption } from "../api/gossipMenuOption/GossipMenuOption";

export const GOSSIPMENUOPTION_TITLE_FIELD = "id";

export const GossipMenuOptionTitle = (record: TGossipMenuOption): string => {
  return record.id?.toString() || String(record.id);
};
