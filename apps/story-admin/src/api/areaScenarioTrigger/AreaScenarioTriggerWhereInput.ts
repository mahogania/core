import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ScenarioWhereUniqueInput } from "../scenario/ScenarioWhereUniqueInput";

export type AreaScenarioTriggerWhereInput = {
  area?: AreaWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
  scenario?: ScenarioWhereUniqueInput;
};
