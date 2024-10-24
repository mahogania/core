import { ProcessorWhereUniqueInput } from "../processor/ProcessorWhereUniqueInput";
import { TraitWhereUniqueInput } from "../trait/TraitWhereUniqueInput";

export type CommandCreateInput = {
  processor?: ProcessorWhereUniqueInput | null;
  trait?: TraitWhereUniqueInput | null;
};
