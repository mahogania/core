import { CharacterSpell as TCharacterSpell } from "../api/characterSpell/CharacterSpell";

export const CHARACTERSPELL_TITLE_FIELD = "id";

export const CharacterSpellTitle = (record: TCharacterSpell): string => {
  return record.id?.toString() || String(record.id);
};
