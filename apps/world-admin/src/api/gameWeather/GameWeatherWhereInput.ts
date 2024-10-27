import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type GameWeatherWhereInput = {
  chance?: IntNullableFilter;
  id?: StringFilter;
  kind?: IntNullableFilter;
  script?: JsonFilter;
  season?: IntNullableFilter;
  zone?: IntNullableFilter;
};
