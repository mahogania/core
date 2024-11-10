import { AreaScenarioTrigger } from "../areaScenarioTrigger/AreaScenarioTrigger";
import { ScenarioRegion } from "../scenarioRegion/ScenarioRegion";
import { SceneTemplate } from "../sceneTemplate/SceneTemplate";
import { User } from "../user/User";

export type Scenario = {
  areaScenarioTriggers?: Array<AreaScenarioTrigger>;
  createdAt: Date;
  id: string;
  scenarioRegions?: ScenarioRegion;
  sceneTemplate?: SceneTemplate;
  updatedAt: Date;
  user?: User | null;
};
