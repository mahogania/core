import { ScenarioPoiWhereUniqueInput } from "../scenarioPoi/ScenarioPoiWhereUniqueInput";
import { ScenarioCreateNestedManyWithoutScenarioRegionsInput } from "./ScenarioCreateNestedManyWithoutScenarioRegionsInput";

export type ScenarioRegionCreateInput = {
  description?: string | null;
  name?: string | null;
  scenarioPois?: ScenarioPoiWhereUniqueInput | null;
  scenarios?: ScenarioCreateNestedManyWithoutScenarioRegionsInput;
};
