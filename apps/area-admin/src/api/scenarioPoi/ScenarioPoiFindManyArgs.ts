import { ScenarioPoiWhereInput } from "./ScenarioPoiWhereInput";
import { ScenarioPoiOrderByInput } from "./ScenarioPoiOrderByInput";

export type ScenarioPoiFindManyArgs = {
  where?: ScenarioPoiWhereInput;
  orderBy?: Array<ScenarioPoiOrderByInput>;
  skip?: number;
  take?: number;
};
