import { AreaScenarioTriggerCreateNestedManyWithoutScenariosInput } from "./AreaScenarioTriggerCreateNestedManyWithoutScenariosInput";
import { ScenarioRegionWhereUniqueInput } from "../scenarioRegion/ScenarioRegionWhereUniqueInput";
import { SceneTemplateWhereUniqueInput } from "../sceneTemplate/SceneTemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ScenarioCreateInput = {
  areaScenarioTriggers?: AreaScenarioTriggerCreateNestedManyWithoutScenariosInput;
  scenarioRegions: ScenarioRegionWhereUniqueInput;
  sceneTemplate: SceneTemplateWhereUniqueInput;
  user?: UserWhereUniqueInput | null;
};
