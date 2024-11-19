import { QuestPoiPoints as TQuestPoiPoints } from "../api/questPoiPoints/QuestPoiPoints";

export const QUESTPOIPOINTS_TITLE_FIELD = "id";

export const QuestPoiPointsTitle = (record: TQuestPoiPoints): string => {
  return record.id?.toString() || String(record.id);
};
