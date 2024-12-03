import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ConversationLineTemplateWhereInput = {
  actorIdx?: IntNullableFilter;
  chatType?: IntNullableFilter;
  flags?: IntNullableFilter;
  id?: StringFilter;
  uiCameraId?: IntNullableFilter;
  verifiedBuild?: IntNullableFilter;
};
