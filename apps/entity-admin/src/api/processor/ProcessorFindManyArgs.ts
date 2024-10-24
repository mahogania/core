import { ProcessorWhereInput } from "./ProcessorWhereInput";
import { ProcessorOrderByInput } from "./ProcessorOrderByInput";

export type ProcessorFindManyArgs = {
  where?: ProcessorWhereInput;
  orderBy?: Array<ProcessorOrderByInput>;
  skip?: number;
  take?: number;
};
