import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GameEventWhereInput = {
  announce?: IntNullableFilter;
  description?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  eventEntry?: IntNullableFilter;
  holiday?: IntNullableFilter;
  holidayStage?: IntNullableFilter;
  id?: StringFilter;
  length?: IntNullableFilter;
  occurence?: IntNullableFilter;
  startTime?: DateTimeNullableFilter;
  worldEvent?: IntNullableFilter;
};
