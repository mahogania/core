import { WorkOrderWhereInput } from "./WorkOrderWhereInput";
import { WorkOrderOrderByInput } from "./WorkOrderOrderByInput";

export type WorkOrderFindManyArgs = {
  where?: WorkOrderWhereInput;
  orderBy?: Array<WorkOrderOrderByInput>;
  skip?: number;
  take?: number;
};
