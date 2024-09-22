import { GameEventNpcFlag as TGameEventNpcFlag } from "../api/gameEventNpcFlag/GameEventNpcFlag";

export const GAMEEVENTNPCFLAG_TITLE_FIELD = "id";

export const GameEventNpcFlagTitle = (record: TGameEventNpcFlag): string => {
  return record.id?.toString() || String(record.id);
};
