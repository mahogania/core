import { GameWeatherWhereUniqueInput } from "./GameWeatherWhereUniqueInput";
import { GameWeatherUpdateInput } from "./GameWeatherUpdateInput";

export type UpdateGameWeatherArgs = {
  where: GameWeatherWhereUniqueInput;
  data: GameWeatherUpdateInput;
};
