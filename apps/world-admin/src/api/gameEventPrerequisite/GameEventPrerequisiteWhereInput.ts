import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GameEventPrerequisiteWhereInput = {
  eventEntry?: IntNullableFilter;
  id?: StringFilter;
  prerequisiteEvent?: IntNullableFilter;
};
