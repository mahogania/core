import { SpellArea as TSpellArea } from "../api/spellArea/SpellArea";

export const SPELLAREA_TITLE_FIELD = "id";

export const SpellAreaTitle = (record: TSpellArea): string => {
  return record.id?.toString() || String(record.id);
};
