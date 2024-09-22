import { PlayercreateinfoCastSpell as TPlayercreateinfoCastSpell } from "../api/playercreateinfoCastSpell/PlayercreateinfoCastSpell";

export const PLAYERCREATEINFOCASTSPELL_TITLE_FIELD = "id";

export const PlayercreateinfoCastSpellTitle = (
  record: TPlayercreateinfoCastSpell
): string => {
  return record.id?.toString() || String(record.id);
};
