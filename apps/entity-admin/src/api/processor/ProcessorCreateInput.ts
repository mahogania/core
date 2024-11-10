import { CommandCreateNestedManyWithoutProcessorsInput } from "./CommandCreateNestedManyWithoutProcessorsInput";
import { ViewCreateNestedManyWithoutProcessorsInput } from "./ViewCreateNestedManyWithoutProcessorsInput";

export type ProcessorCreateInput = {
  commands?: CommandCreateNestedManyWithoutProcessorsInput;
  views?: ViewCreateNestedManyWithoutProcessorsInput;
};
