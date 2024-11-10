import { ProcessorWhereUniqueInput } from "../processor/ProcessorWhereUniqueInput";
import { TraitWhereUniqueInput } from "../trait/TraitWhereUniqueInput";

export type CommandUpdateInput = {
  processor?: ProcessorWhereUniqueInput | null;
  trait?: TraitWhereUniqueInput | null;
};
