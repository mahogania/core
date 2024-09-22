import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommandWhereInput = {
  help?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
