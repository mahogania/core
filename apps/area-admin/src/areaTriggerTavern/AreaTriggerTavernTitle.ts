import { AreaTriggerTavern as TAreaTriggerTavern } from "../api/areaTriggerTavern/AreaTriggerTavern";

export const AREATRIGGERTAVERN_TITLE_FIELD = "name";

export const AreaTriggerTavernTitle = (record: TAreaTriggerTavern): string => {
  return record.name?.toString() || String(record.id);
};
