import { ScenarioPoiPoints as TScenarioPoiPoints } from "../api/scenarioPoiPoints/ScenarioPoiPoints";

export const SCENARIOPOIPOINTS_TITLE_FIELD = "id";

export const ScenarioPoiPointsTitle = (record: TScenarioPoiPoints): string => {
  return record.id?.toString() || String(record.id);
};
