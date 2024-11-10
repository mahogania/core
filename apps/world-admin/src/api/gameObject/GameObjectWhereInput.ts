import { IntNullableFilter } from "../../util/IntNullableFilter";
import { GameObjectTemplateWhereUniqueInput } from "../gameObjectTemplate/GameObjectTemplateWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GameObjectWhereInput = {
  areaId?: IntNullableFilter;
  gameObjectTemplate?: GameObjectTemplateWhereUniqueInput;
  id?: StringFilter;
  mapId?: IntNullableFilter;
  phaseGroupId?: IntNullableFilter;
  phaseId?: IntNullableFilter;
  script?: JsonFilter;
  spawnTime?: DateTimeNullableFilter;
  state?: IntNullableFilter;
  stringId?: StringNullableFilter;
  transformId?: StringFilter;
  version?: IntNullableFilter;
  zoneId?: IntNullableFilter;
};
