import { ScenariosWhereInput } from "./ScenariosWhereInput";
import { ScenariosOrderByInput } from "./ScenariosOrderByInput";

export type ScenariosFindManyArgs = {
  where?: ScenariosWhereInput;
  orderBy?: Array<ScenariosOrderByInput>;
  skip?: number;
  take?: number;
};
