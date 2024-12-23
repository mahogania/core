import { PipelineWhereUniqueInput } from "../pipeline/PipelineWhereUniqueInput";
import { Pipeline } from "../pipeline/Pipeline";
import { FormCreateNestedManyWithoutProcessesInput } from "./FormCreateNestedManyWithoutProcessesInput";
import { ThreatCreateNestedManyWithoutProcessesInput } from "./ThreatCreateNestedManyWithoutProcessesInput";

export type ProcessCreateInput = {
  Pipeline?: PipelineWhereUniqueInput | null;
  forms?: FormCreateNestedManyWithoutProcessesInput;
  threats?: ThreatCreateNestedManyWithoutProcessesInput;
};
