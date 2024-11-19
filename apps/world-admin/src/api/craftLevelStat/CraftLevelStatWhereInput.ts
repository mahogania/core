import { CraftWhereUniqueInput } from "../craft/CraftWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CraftLevelStatWhereInput = {
  craft?: CraftWhereUniqueInput;
  id?: StringFilter;
  level?: IntNullableFilter;
  stat?: StringFilter;
  value?: StringNullableFilter;
};
