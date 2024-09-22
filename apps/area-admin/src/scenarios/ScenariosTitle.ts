import { Scenarios as TScenarios } from "../api/scenarios/Scenarios";

export const SCENARIOS_TITLE_FIELD = "id";

export const ScenariosTitle = (record: TScenarios): string => {
  return record.id?.toString() || String(record.id);
};
