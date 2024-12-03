import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AreaTriggerTeleportWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  portLocId?: IntNullableFilter;
};
