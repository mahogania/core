import { ScenarioRegionWhereInput } from "./ScenarioRegionWhereInput";
import { ScenarioRegionOrderByInput } from "./ScenarioRegionOrderByInput";

export type ScenarioRegionFindManyArgs = {
  where?: ScenarioRegionWhereInput;
  orderBy?: Array<ScenarioRegionOrderByInput>;
  skip?: number;
  take?: number;
};
