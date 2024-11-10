import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { ScenarioWhereUniqueInput } from "../scenario/ScenarioWhereUniqueInput";

export type AreaScenarioTriggerCreateInput = {
  area?: AreaWhereUniqueInput | null;
  name: string;
  scenario?: ScenarioWhereUniqueInput | null;
};
