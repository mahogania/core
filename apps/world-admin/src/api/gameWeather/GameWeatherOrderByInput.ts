import { SortOrder } from "../../util/SortOrder";

export type GameWeatherOrderByInput = {
  createdAt?: SortOrder;
  fallRainChance?: SortOrder;
  fallSnowChance?: SortOrder;
  fallStormChance?: SortOrder;
  id?: SortOrder;
  scriptName?: SortOrder;
  springRainChance?: SortOrder;
  springSnowChance?: SortOrder;
  springStormChance?: SortOrder;
  summerRainChance?: SortOrder;
  summerSnowChance?: SortOrder;
  summerStormChance?: SortOrder;
  updatedAt?: SortOrder;
  winterRainChance?: SortOrder;
  winterSnowChance?: SortOrder;
  winterStormChance?: SortOrder;
  zone?: SortOrder;
};
