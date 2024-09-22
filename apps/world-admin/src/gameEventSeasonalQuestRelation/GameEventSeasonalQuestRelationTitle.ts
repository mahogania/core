import { GameEventSeasonalQuestRelation as TGameEventSeasonalQuestRelation } from "../api/gameEventSeasonalQuestRelation/GameEventSeasonalQuestRelation";

export const GAMEEVENTSEASONALQUESTRELATION_TITLE_FIELD = "id";

export const GameEventSeasonalQuestRelationTitle = (
  record: TGameEventSeasonalQuestRelation
): string => {
  return record.id?.toString() || String(record.id);
};
