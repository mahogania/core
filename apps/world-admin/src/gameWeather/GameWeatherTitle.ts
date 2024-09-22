import { GameWeather as TGameWeather } from "../api/gameWeather/GameWeather";

export const GAMEWEATHER_TITLE_FIELD = "scriptName";

export const GameWeatherTitle = (record: TGameWeather): string => {
  return record.scriptName?.toString() || String(record.id);
};
