import { ConfigurationUpdateManyWithoutPipelinesInput } from "./ConfigurationUpdateManyWithoutPipelinesInput";
import { ProcessUpdateManyWithoutPipelinesInput } from "./ProcessUpdateManyWithoutPipelinesInput";

export type PipelineUpdateInput = {
  Configurations?: ConfigurationUpdateManyWithoutPipelinesInput;
  processes?: ProcessUpdateManyWithoutPipelinesInput;
};
