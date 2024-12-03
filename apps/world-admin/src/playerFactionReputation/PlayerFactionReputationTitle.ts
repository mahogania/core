import { PlayerFactionReputation as TPlayerFactionReputation } from "../api/playerFactionReputation/PlayerFactionReputation";

export const PLAYERFACTIONREPUTATION_TITLE_FIELD = "id";

export const PlayerFactionReputationTitle = (
  record: TPlayerFactionReputation
): string => {
  return record.id?.toString() || String(record.id);
};
