import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ConversationTemplateWhereInput = {
  firstLineId?: IntNullableFilter;
  flags?: IntNullableFilter;
  id?: StringFilter;
  scriptName?: StringNullableFilter;
  textureKitId?: IntNullableFilter;
  verifiedBuild?: IntNullableFilter;
};
