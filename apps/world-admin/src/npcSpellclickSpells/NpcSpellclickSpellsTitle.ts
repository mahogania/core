import { NpcSpellclickSpells as TNpcSpellclickSpells } from "../api/npcSpellclickSpells/NpcSpellclickSpells";

export const NPCSPELLCLICKSPELLS_TITLE_FIELD = "id";

export const NpcSpellclickSpellsTitle = (
  record: TNpcSpellclickSpells
): string => {
  return record.id?.toString() || String(record.id);
};
