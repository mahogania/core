import { PlayercreateinfoItem as TPlayercreateinfoItem } from "../api/playercreateinfoItem/PlayercreateinfoItem";

export const PLAYERCREATEINFOITEM_TITLE_FIELD = "id";

export const PlayercreateinfoItemTitle = (
  record: TPlayercreateinfoItem
): string => {
  return record.id?.toString() || String(record.id);
};
