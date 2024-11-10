import { StringFilter } from "../../util/StringFilter";
import { ScenarioRegionListRelationFilter } from "../scenarioRegion/ScenarioRegionListRelationFilter";

export type ScenarioPoiWhereInput = {
  id?: StringFilter;
  location?: StringFilter;
  scenarioRegions?: ScenarioRegionListRelationFilter;
};
