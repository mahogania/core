import { ScenarioPoiWhereUniqueInput } from "../scenarioPoi/ScenarioPoiWhereUniqueInput";
import { ScenarioUpdateManyWithoutScenarioRegionsInput } from "./ScenarioUpdateManyWithoutScenarioRegionsInput";

export type ScenarioRegionUpdateInput = {
  description?: string | null;
  name?: string | null;
  scenarioPois?: ScenarioPoiWhereUniqueInput | null;
  scenarios?: ScenarioUpdateManyWithoutScenarioRegionsInput;
};
