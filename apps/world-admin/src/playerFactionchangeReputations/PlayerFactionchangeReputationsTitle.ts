import { PlayerFactionchangeReputations as TPlayerFactionchangeReputations } from "../api/playerFactionchangeReputations/PlayerFactionchangeReputations";

export const PLAYERFACTIONCHANGEREPUTATIONS_TITLE_FIELD = "id";

export const PlayerFactionchangeReputationsTitle = (
  record: TPlayerFactionchangeReputations
): string => {
  return record.id?.toString() || String(record.id);
};
