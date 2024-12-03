import { FragmentWhereUniqueInput } from "../fragment/FragmentWhereUniqueInput";
import { ProcessorWhereUniqueInput } from "../processor/ProcessorWhereUniqueInput";

export type ViewCreateInput = {
  fragment?: FragmentWhereUniqueInput | null;
  processor?: ProcessorWhereUniqueInput | null;
};
