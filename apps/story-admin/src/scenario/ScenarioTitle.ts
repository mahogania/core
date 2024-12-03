import { Scenario as TScenario } from "../api/scenario/Scenario";

export const SCENARIO_TITLE_FIELD = "id";

export const ScenarioTitle = (record: TScenario): string => {
  return record.id?.toString() || String(record.id);
};
