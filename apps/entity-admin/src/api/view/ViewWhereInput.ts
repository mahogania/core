import { FragmentWhereUniqueInput } from "../fragment/FragmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProcessorWhereUniqueInput } from "../processor/ProcessorWhereUniqueInput";

export type ViewWhereInput = {
  fragment?: FragmentWhereUniqueInput;
  id?: StringFilter;
  processor?: ProcessorWhereUniqueInput;
};
