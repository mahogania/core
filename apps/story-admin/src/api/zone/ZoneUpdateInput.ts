import { AreaUpdateManyWithoutZonesInput } from "./AreaUpdateManyWithoutZonesInput";
import { MapWhereUniqueInput } from "../map/MapWhereUniqueInput";

export type ZoneUpdateInput = {
  areas?: AreaUpdateManyWithoutZonesInput;
  map?: MapWhereUniqueInput | null;
};
