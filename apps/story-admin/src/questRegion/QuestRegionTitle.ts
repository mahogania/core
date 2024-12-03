import { QuestRegion as TQuestRegion } from "../api/questRegion/QuestRegion";

export const QUESTREGION_TITLE_FIELD = "name";

export const QuestRegionTitle = (record: TQuestRegion): string => {
  return record.name?.toString() || String(record.id);
};
