import { FragmentWhereUniqueInput } from "../fragment/FragmentWhereUniqueInput";
import { ProcessorWhereUniqueInput } from "../processor/ProcessorWhereUniqueInput";

export type ViewUpdateInput = {
  fragment?: FragmentWhereUniqueInput | null;
  processor?: ProcessorWhereUniqueInput | null;
};
