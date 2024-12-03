import { ScenarioPoi as TScenarioPoi } from "../api/scenarioPoi/ScenarioPoi";

export const SCENARIOPOI_TITLE_FIELD = "id";

export const ScenarioPoiTitle = (record: TScenarioPoi): string => {
  return record.id?.toString() || String(record.id);
};
