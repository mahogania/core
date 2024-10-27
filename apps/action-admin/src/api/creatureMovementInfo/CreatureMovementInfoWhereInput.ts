import { CreatureListRelationFilter } from "../creature/CreatureListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CreatureMovementInfoWhereInput = {
  creatures?: CreatureListRelationFilter;
  id?: StringFilter;
  movementId?: StringFilter;
  speed?: FloatNullableFilter;
};
