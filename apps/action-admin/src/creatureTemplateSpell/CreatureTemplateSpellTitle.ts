import { CreatureTemplateSpell as TCreatureTemplateSpell } from "../api/creatureTemplateSpell/CreatureTemplateSpell";

export const CREATURETEMPLATESPELL_TITLE_FIELD = "id";

export const CreatureTemplateSpellTitle = (
  record: TCreatureTemplateSpell
): string => {
  return record.id?.toString() || String(record.id);
};
