import { AreaQuestTrigger as TAreaQuestTrigger } from "../api/areaQuestTrigger/AreaQuestTrigger";

export const AREAQUESTTRIGGER_TITLE_FIELD = "id";

export const AreaQuestTriggerTitle = (record: TAreaQuestTrigger): string => {
  return record.id?.toString() || String(record.id);
};
