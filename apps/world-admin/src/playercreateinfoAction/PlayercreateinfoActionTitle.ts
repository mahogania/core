import { PlayercreateinfoAction as TPlayercreateinfoAction } from "../api/playercreateinfoAction/PlayercreateinfoAction";

export const PLAYERCREATEINFOACTION_TITLE_FIELD = "id";

export const PlayercreateinfoActionTitle = (
  record: TPlayercreateinfoAction
): string => {
  return record.id?.toString() || String(record.id);
};
