import { ZoneUpdateManyWithoutMapsInput } from "./ZoneUpdateManyWithoutMapsInput";

export type MapUpdateInput = {
  name?: string | null;
  zones?: ZoneUpdateManyWithoutMapsInput;
};
