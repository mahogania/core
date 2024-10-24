import { FragmentWhereUniqueInput } from "../fragment/FragmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AttributeWhereInput = {
  fragment?: FragmentWhereUniqueInput;
  id?: StringFilter;
};
