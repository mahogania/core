import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScenarioPoiWhereUniqueInput } from "../scenarioPoi/ScenarioPoiWhereUniqueInput";
import { ScenarioListRelationFilter } from "../scenario/ScenarioListRelationFilter";

export type ScenarioRegionWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  scenarioPois?: ScenarioPoiWhereUniqueInput;
  scenarios?: ScenarioListRelationFilter;
};
