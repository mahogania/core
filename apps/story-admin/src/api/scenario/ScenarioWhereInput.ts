import { AreaScenarioTriggerListRelationFilter } from "../areaScenarioTrigger/AreaScenarioTriggerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScenarioRegionWhereUniqueInput } from "../scenarioRegion/ScenarioRegionWhereUniqueInput";
import { SceneTemplateWhereUniqueInput } from "../sceneTemplate/SceneTemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ScenarioWhereInput = {
  areaScenarioTriggers?: AreaScenarioTriggerListRelationFilter;
  id?: StringFilter;
  scenarioRegions?: ScenarioRegionWhereUniqueInput;
  sceneTemplate?: SceneTemplateWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
