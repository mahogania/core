import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GameEventModelEquipWhereInput = {
  equipmentId?: IntNullableFilter;
  eventEntry?: IntNullableFilter;
  guid?: IntNullableFilter;
  id?: StringFilter;
  modelid?: IntNullableFilter;
};
