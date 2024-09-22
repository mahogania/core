import { Spell as TSpell } from "../api/spell/Spell";

export const SPELL_TITLE_FIELD = "id";

export const SpellTitle = (record: TSpell): string => {
  return record.id?.toString() || String(record.id);
};
