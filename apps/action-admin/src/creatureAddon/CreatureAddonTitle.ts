import { CreatureAddon as TCreatureAddon } from "../api/creatureAddon/CreatureAddon";

export const CREATUREADDON_TITLE_FIELD = "id";

export const CreatureAddonTitle = (record: TCreatureAddon): string => {
  return record.id?.toString() || String(record.id);
};
