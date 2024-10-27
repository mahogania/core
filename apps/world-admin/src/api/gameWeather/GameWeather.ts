import { JsonValue } from "type-fest";

export type GameWeather = {
  chance: number | null;
  createdAt: Date;
  id: string;
  kind: number | null;
  script: JsonValue;
  season: number | null;
  updatedAt: Date;
  zone: number | null;
};
