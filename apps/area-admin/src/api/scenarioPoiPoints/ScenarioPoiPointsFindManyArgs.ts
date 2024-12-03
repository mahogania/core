import { ScenarioPoiPointsWhereInput } from "./ScenarioPoiPointsWhereInput";
import { ScenarioPoiPointsOrderByInput } from "./ScenarioPoiPointsOrderByInput";

export type ScenarioPoiPointsFindManyArgs = {
  where?: ScenarioPoiPointsWhereInput;
  orderBy?: Array<ScenarioPoiPointsOrderByInput>;
  skip?: number;
  take?: number;
};
