import { Area } from "../area/Area";
import { Map } from "../map/Map";

export type Zone = {
  areas?: Array<Area>;
  createdAt: Date;
  id: string;
  map?: Map | null;
  updatedAt: Date;
};
