import { CreatureTemplateGossip as TCreatureTemplateGossip } from "../api/creatureTemplateGossip/CreatureTemplateGossip";

export const CREATURETEMPLATEGOSSIP_TITLE_FIELD = "id";

export const CreatureTemplateGossipTitle = (
  record: TCreatureTemplateGossip
): string => {
  return record.id?.toString() || String(record.id);
};
