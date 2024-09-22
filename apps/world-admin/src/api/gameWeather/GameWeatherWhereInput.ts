import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GameWeatherWhereInput = {
  fallRainChance?: IntNullableFilter;
  fallSnowChance?: IntNullableFilter;
  fallStormChance?: IntNullableFilter;
  id?: StringFilter;
  scriptName?: StringNullableFilter;
  springRainChance?: IntNullableFilter;
  springSnowChance?: IntNullableFilter;
  springStormChance?: IntNullableFilter;
  summerRainChance?: IntNullableFilter;
  summerSnowChance?: IntNullableFilter;
  summerStormChance?: IntNullableFilter;
  winterRainChance?: IntNullableFilter;
  winterSnowChance?: IntNullableFilter;
  winterStormChance?: IntNullableFilter;
  zone?: IntNullableFilter;
};
