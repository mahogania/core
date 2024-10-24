import { PipelineWhereUniqueInput } from "../pipeline/PipelineWhereUniqueInput";
import { Pipeline } from "../pipeline/Pipeline";
import { FormCreateNestedManyWithoutProcessesInput } from "./FormCreateNestedManyWithoutProcessesInput";

export type ProcessCreateInput = {
  Pipeline?: PipelineWhereUniqueInput | null;
  forms?: FormCreateNestedManyWithoutProcessesInput;
};
