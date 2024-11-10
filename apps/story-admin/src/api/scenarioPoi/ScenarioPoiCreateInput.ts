import { ScenarioRegionCreateNestedManyWithoutScenarioPoisInput } from "./ScenarioRegionCreateNestedManyWithoutScenarioPoisInput";

export type ScenarioPoiCreateInput = {
  location: string;
  scenarioRegions?: ScenarioRegionCreateNestedManyWithoutScenarioPoisInput;
};
