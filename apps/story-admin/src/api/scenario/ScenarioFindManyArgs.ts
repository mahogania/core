import { ScenarioWhereInput } from "./ScenarioWhereInput";
import { ScenarioOrderByInput } from "./ScenarioOrderByInput";

export type ScenarioFindManyArgs = {
  where?: ScenarioWhereInput;
  orderBy?: Array<ScenarioOrderByInput>;
  skip?: number;
  take?: number;
};
