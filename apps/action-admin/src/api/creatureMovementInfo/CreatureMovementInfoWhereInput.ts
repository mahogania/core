import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CreatureMovementInfoWhereInput = {
  id?: StringFilter;
  movementId?: IntNullableFilter;
  runSpeed?: FloatNullableFilter;
  walkSpeed?: FloatNullableFilter;
};
