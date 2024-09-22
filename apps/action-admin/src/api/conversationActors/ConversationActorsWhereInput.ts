import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ConversationActorsWhereInput = {
  activePlayerObject?: IntNullableFilter;
  conversationActorGuid?: FloatNullableFilter;
  conversationActorId?: IntNullableFilter;
  conversationId?: IntNullableFilter;
  creatureDisplayInfoId?: IntNullableFilter;
  creatureId?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  noActorObject?: IntNullableFilter;
  verifiedBuild?: IntNullableFilter;
};
