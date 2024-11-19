import { PipelineWhereUniqueInput } from "../pipeline/PipelineWhereUniqueInput";
import { Pipeline } from "../pipeline/Pipeline";
import { FormUpdateManyWithoutProcessesInput } from "./FormUpdateManyWithoutProcessesInput";
import { ThreatUpdateManyWithoutProcessesInput } from "./ThreatUpdateManyWithoutProcessesInput";

export type ProcessUpdateInput = {
  Pipeline?: PipelineWhereUniqueInput | null;
  forms?: FormUpdateManyWithoutProcessesInput;
  threats?: ThreatUpdateManyWithoutProcessesInput;
};
