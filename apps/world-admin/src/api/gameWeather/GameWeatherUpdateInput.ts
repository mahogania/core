import { InputJsonValue } from "../../types";

export type GameWeatherUpdateInput = {
  chance?: number | null;
  kind?: number | null;
  script?: InputJsonValue;
  season?: number | null;
  zone?: number | null;
};
