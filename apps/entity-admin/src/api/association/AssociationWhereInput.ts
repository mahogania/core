import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AssociationWhereInput = {
  ascendant?: EntityWhereUniqueInput;
  descendant?: EntityWhereUniqueInput;
  description?: StringNullableFilter;
  displayName?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
