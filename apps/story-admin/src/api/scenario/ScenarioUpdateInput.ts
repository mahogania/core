import { AreaScenarioTriggerUpdateManyWithoutScenariosInput } from "./AreaScenarioTriggerUpdateManyWithoutScenariosInput";
import { ScenarioRegionWhereUniqueInput } from "../scenarioRegion/ScenarioRegionWhereUniqueInput";
import { SceneTemplateWhereUniqueInput } from "../sceneTemplate/SceneTemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ScenarioUpdateInput = {
  areaScenarioTriggers?: AreaScenarioTriggerUpdateManyWithoutScenariosInput;
  scenarioRegions?: ScenarioRegionWhereUniqueInput;
  sceneTemplate?: SceneTemplateWhereUniqueInput;
  user?: UserWhereUniqueInput | null;
};
