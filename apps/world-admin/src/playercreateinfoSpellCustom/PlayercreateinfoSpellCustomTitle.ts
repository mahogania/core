import { PlayercreateinfoSpellCustom as TPlayercreateinfoSpellCustom } from "../api/playercreateinfoSpellCustom/PlayercreateinfoSpellCustom";

export const PLAYERCREATEINFOSPELLCUSTOM_TITLE_FIELD = "id";

export const PlayercreateinfoSpellCustomTitle = (
  record: TPlayercreateinfoSpellCustom
): string => {
  return record.id?.toString() || String(record.id);
};
