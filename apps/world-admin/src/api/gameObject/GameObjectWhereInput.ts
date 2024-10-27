import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type GameObjectWhereInput = {
  areaId?: IntNullableFilter;
  id?: StringFilter;
  mapId?: IntNullableFilter;
  phaseGroupId?: IntNullableFilter;
  phaseId?: IntNullableFilter;
  positionX?: StringNullableFilter;
  positionY?: StringNullableFilter;
  positionZ?: StringNullableFilter;
  rotationW?: StringNullableFilter;
  rotationX?: StringNullableFilter;
  rotationY?: StringNullableFilter;
  rotationZ?: StringNullableFilter;
  script?: JsonFilter;
  spawnTime?: DateTimeNullableFilter;
  state?: IntNullableFilter;
  stringId?: StringNullableFilter;
  version?: IntNullableFilter;
  zoneId?: IntNullableFilter;
};
