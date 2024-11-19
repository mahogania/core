import { ConfigurationCreateNestedManyWithoutPipelinesInput } from "./ConfigurationCreateNestedManyWithoutPipelinesInput";
import { ProcessCreateNestedManyWithoutPipelinesInput } from "./ProcessCreateNestedManyWithoutPipelinesInput";

export type PipelineCreateInput = {
  Configurations?: ConfigurationCreateNestedManyWithoutPipelinesInput;
  processes?: ProcessCreateNestedManyWithoutPipelinesInput;
};
