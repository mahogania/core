import { AreaScenarioTrigger as TAreaScenarioTrigger } from "../api/areaScenarioTrigger/AreaScenarioTrigger";

export const AREASCENARIOTRIGGER_TITLE_FIELD = "name";

export const AreaScenarioTriggerTitle = (
  record: TAreaScenarioTrigger
): string => {
  return record.name?.toString() || String(record.id);
};
