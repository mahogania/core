import { AreaCreateNestedManyWithoutZonesInput } from "./AreaCreateNestedManyWithoutZonesInput";
import { MapWhereUniqueInput } from "../map/MapWhereUniqueInput";

export type ZoneCreateInput = {
  areas?: AreaCreateNestedManyWithoutZonesInput;
  map?: MapWhereUniqueInput | null;
};
