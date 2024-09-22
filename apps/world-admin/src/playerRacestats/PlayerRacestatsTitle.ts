import { PlayerRacestats as TPlayerRacestats } from "../api/playerRacestats/PlayerRacestats";

export const PLAYERRACESTATS_TITLE_FIELD = "id";

export const PlayerRacestatsTitle = (record: TPlayerRacestats): string => {
  return record.id?.toString() || String(record.id);
};
