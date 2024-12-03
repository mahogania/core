import { SpellEffect as TSpellEffect } from "../api/spellEffect/SpellEffect";

export const SPELLEFFECT_TITLE_FIELD = "id";

export const SpellEffectTitle = (record: TSpellEffect): string => {
  return record.id?.toString() || String(record.id);
};
