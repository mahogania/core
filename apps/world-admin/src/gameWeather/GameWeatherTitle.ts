import { GameWeather as TGameWeather } from "../api/gameWeather/GameWeather";

export const GAMEWEATHER_TITLE_FIELD = "id";

export const GameWeatherTitle = (record: TGameWeather): string => {
  return record.id?.toString() || String(record.id);
};
