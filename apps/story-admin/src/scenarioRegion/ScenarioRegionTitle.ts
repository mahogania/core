import { ScenarioRegion as TScenarioRegion } from "../api/scenarioRegion/ScenarioRegion";

export const SCENARIOREGION_TITLE_FIELD = "name";

export const ScenarioRegionTitle = (record: TScenarioRegion): string => {
  return record.name?.toString() || String(record.id);
};
