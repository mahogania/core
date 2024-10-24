import { PipelineWhereUniqueInput } from "../pipeline/PipelineWhereUniqueInput";
import { Pipeline } from "../pipeline/Pipeline";
import { FormUpdateManyWithoutProcessesInput } from "./FormUpdateManyWithoutProcessesInput";

export type ProcessUpdateInput = {
  Pipeline?: PipelineWhereUniqueInput | null;
  forms?: FormUpdateManyWithoutProcessesInput;
};
