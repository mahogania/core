import { PipelineWhereInput } from "./PipelineWhereInput";
import { PipelineOrderByInput } from "./PipelineOrderByInput";

export type PipelineFindManyArgs = {
  where?: PipelineWhereInput;
  orderBy?: Array<PipelineOrderByInput>;
  skip?: number;
  take?: number;
};
