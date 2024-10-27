import { QuestPoi as TQuestPoi } from "../api/questPoi/QuestPoi";

export const QUESTPOI_TITLE_FIELD = "id";

export const QuestPoiTitle = (record: TQuestPoi): string => {
  return record.id?.toString() || String(record.id);
};
