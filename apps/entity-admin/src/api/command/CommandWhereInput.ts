import { StringFilter } from "../../util/StringFilter";
import { ProcessorWhereUniqueInput } from "../processor/ProcessorWhereUniqueInput";
import { TraitWhereUniqueInput } from "../trait/TraitWhereUniqueInput";

export type CommandWhereInput = {
  id?: StringFilter;
  processor?: ProcessorWhereUniqueInput;
  trait?: TraitWhereUniqueInput;
};
