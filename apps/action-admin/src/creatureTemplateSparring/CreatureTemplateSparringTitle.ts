import { CreatureTemplateSparring as TCreatureTemplateSparring } from "../api/creatureTemplateSparring/CreatureTemplateSparring";

export const CREATURETEMPLATESPARRING_TITLE_FIELD = "id";

export const CreatureTemplateSparringTitle = (
  record: TCreatureTemplateSparring
): string => {
  return record.id?.toString() || String(record.id);
};
