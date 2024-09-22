import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GameEventNpcVendorWhereInput = {
  bonusListIDs?: StringNullableFilter;
  eventEntry?: IntNullableFilter;
  extendedCost?: IntNullableFilter;
  guid?: IntNullableFilter;
  id?: StringFilter;
  ignoreFiltering?: IntNullableFilter;
  incrtime?: IntNullableFilter;
  item?: IntNullableFilter;
  maxcount?: IntNullableFilter;
  playerConditionId?: IntNullableFilter;
  slot?: IntNullableFilter;
  typeField?: IntNullableFilter;
};
