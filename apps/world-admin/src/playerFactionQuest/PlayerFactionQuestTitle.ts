import { PlayerFactionQuest as TPlayerFactionQuest } from "../api/playerFactionQuest/PlayerFactionQuest";

export const PLAYERFACTIONQUEST_TITLE_FIELD = "questId";

export const PlayerFactionQuestTitle = (
  record: TPlayerFactionQuest
): string => {
  return record.questId?.toString() || String(record.id);
};
