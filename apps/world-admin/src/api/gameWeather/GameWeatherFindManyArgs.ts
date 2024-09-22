import { GameWeatherWhereInput } from "./GameWeatherWhereInput";
import { GameWeatherOrderByInput } from "./GameWeatherOrderByInput";

export type GameWeatherFindManyArgs = {
  where?: GameWeatherWhereInput;
  orderBy?: Array<GameWeatherOrderByInput>;
  skip?: number;
  take?: number;
};
