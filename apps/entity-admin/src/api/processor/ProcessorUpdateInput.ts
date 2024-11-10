import { CommandUpdateManyWithoutProcessorsInput } from "./CommandUpdateManyWithoutProcessorsInput";
import { ViewUpdateManyWithoutProcessorsInput } from "./ViewUpdateManyWithoutProcessorsInput";

export type ProcessorUpdateInput = {
  commands?: CommandUpdateManyWithoutProcessorsInput;
  views?: ViewUpdateManyWithoutProcessorsInput;
};
