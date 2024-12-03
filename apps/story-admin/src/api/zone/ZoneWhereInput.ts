import { AreaListRelationFilter } from "../area/AreaListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MapWhereUniqueInput } from "../map/MapWhereUniqueInput";

export type ZoneWhereInput = {
  areas?: AreaListRelationFilter;
  id?: StringFilter;
  map?: MapWhereUniqueInput;
};
